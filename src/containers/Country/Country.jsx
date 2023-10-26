import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import "./Country.css"
import {fetchCountryData} from "../../axios/api";
import LoadingHandle from "../../components/LoadingHandle/LoadingHandle";
import ErrorHandle from "../../components/ErrorHandle/ErrorHandle";
import useLoading from "../../hooks/useLoading";
import useError from "../../hooks/useError";

const formatCurrency = (data) => {
    const currencyList = Object.values(data);
    const formattedCurrencies = currencyList.map(c => `${c.name}(${c.symbol})`);
    return formattedCurrencies.join(', ');
}

const renderCountryDetails = (c) => {
    const {
        flag, flags, name, population, region, subregion, capital, tld, currencies, languages, borders
    } = c

    const commonName = name['common'] || ""
    const officialName = name['official'] || ""

    const leftDetailSections = [
        {label: 'Official Name', value: officialName},
        {label: 'Population', value: population.toLocaleString()},
        {label: 'Region', value: region},
        {label: 'Sub Region', value: subregion},
        {label: 'Capital', value: capital},
    ];

    const rightDetailSections = [
        {label: 'Top Level Domain', value: tld.join(', ')},
        {label: 'Currencies', value: formatCurrency(currencies)},
        {label: 'Languages', value: Object.values(languages).join(', ')},
    ]

    const renderDetailsSection = (section) => (
        <div key={section.label}>
            <h5>
                {section.label}: <span>{section.value}</span>
            </h5>
        </div>
    );

    return (
        <article key={flag}>
            <div className="country-inner">
                <div className="flag">
                    <img src={flags['svg'] || ''} alt={commonName}/>
                </div>
                <div>
                    <h2 className="common-name">{commonName}</h2>
                    <div className="country-details">
                        <div className="details-column">
                            {leftDetailSections.map(renderDetailsSection)}
                        </div>
                        <div className="details-column">
                            {rightDetailSections.map(renderDetailsSection)}
                        </div>
                    </div>
                    {borders && borders.length > 0 && (
                        <div className="borders">
                            <h3>Border Countries: </h3>
                            <span>{borders.join(', ')}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

const Country = () => {
    const [country, setCountry] = useState([])
    const { loading, setLoading, handleLoading } = useLoading();
    const { error, handleError } = useError();

    const {name} = useParams()


    useEffect(() => {
        if (name) {
            fetchCountryData(name).then(res => {
                setCountry(res.data);
                handleLoading();
            }).catch(err => {
                setLoading(false);
                handleError(err);
            })
        }
    }, [name])

    return (<>
            <section className="country">
                <Link to="/" className="btn btn-back">
                    <button>
                        <i className="fas fa-arrow-left"></i> Back Home
                    </button>
                </Link>

                {loading && <LoadingHandle/>}
                {error && <ErrorHandle message={error}/>}

                {!loading && country.map((c) => renderCountryDetails(c))}
            </section>
        </>
    )
}

export default Country

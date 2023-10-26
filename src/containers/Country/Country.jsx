import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import "./Country.css"
import {fetchCountryData} from "../../axios/api";

const formatCurrency = (data) => {
    const currencyList = Object.values(data);
    const formattedCurrencies = currencyList.map(c => `${c.name}(${c.symbol})`);
    return formattedCurrencies.join(', ');
}

const Country = () => {
    const [country, setCountry] = useState([])
    const {name} = useParams()
    useEffect(() => {
        if (name) {
            fetchCountryData(name).then(res => {
                console.log(res.data)
                setCountry(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [name])

    return (<>
            <section className="country">
                <Link to="/" className="btn btn-back">
                    <i className="fas fa-arrow-left"></i> Back Home
                </Link>
                {country.map((c) => {
                    const {
                        flag, flags, name, population, region, subregion, capital, tld, currencies, languages
                    } = c
                    console.log(c)

                    const commonName = name['common'] || ""
                    const officialName = name['official'] || ""
                    const borders = c['borders'] || []

                    return (<article key={flag}>
                        <div className="country-inner">
                            <div className="flag">
                                <img src={flags['svg'] || ""} alt={commonName}/>
                            </div>

                            <div>
                                <h2 className="common-name">{commonName}</h2>
                                <div className="country-details">
                                    <div>
                                        <h5>
                                            Official Name: <span>{officialName}</span>
                                        </h5>
                                        <h5>
                                            Population: <span>{population.toLocaleString()}</span>
                                        </h5>
                                        <h5>
                                            Region: <span>{region}</span>
                                        </h5>
                                        <h5>
                                            Sub Region: <span>{subregion}</span>
                                        </h5>
                                        <h5>
                                            Capital: <span>{capital}</span>{" "}
                                        </h5>
                                    </div>

                                    <div>
                                        <h5>
                                            Top Level Domain: <span>{tld.join(', ')}</span>
                                        </h5>
                                        <h5>
                                            Currencies: <span>{formatCurrency(currencies)}</span>
                                        </h5>
                                        <h5>
                                            Languages: <span>{Object.values(languages).join(', ')}</span>
                                        </h5>
                                    </div>
                                </div>
                                {borders.length ? (<div className="borders">
                                    <h3>Border Countries:  </h3>
                                    <span>{borders.join(', ')}</span>
                                </div>) : ""}
                            </div>
                        </div>
                    </article>)
                })}
            </section>
        </>
    )
}

export default Country

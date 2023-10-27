import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import './Home.css'
import {fetchAllCountries} from "../../axios/api";
import CountryCard from "./CountryCard/CountryCard";
import CountrySearch from "./CountrySearch/CountrySearch";
import LoadingHandle from "../../components/LoadingHandle/LoadingHandle";
import ErrorHandle from "../../components/ErrorHandle/ErrorHandle";
import EmptySvg from "../../components/EmptySvg/EmptySvg";
import useError from "../../hooks/useError";
import useLoading from "../../hooks/useLoading";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const { loading, setLoading, handleLoading } = useLoading();
    const { error, handleError } = useError();

    useEffect(() => {
        fetchAllCountries().then(res => {
            setCountries(res.data);
            handleLoading();
        }).catch(err => {
            setLoading(false);
            handleError(err)
        })
    }, []);

    useEffect(() => {
        if (!searchInput) setFiltered(countries)
    }, [countries, searchInput]);

    return <div className="home">
        <CountrySearch
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setFiltered={setFiltered}
            setCountries={setCountries}
            countries={countries}
        />

        {loading && <LoadingHandle/>}
        {error && <ErrorHandle message={error}/>}

        {loading ? "" : filtered.length ? (<div className="countries">
                {filtered.map((country, index) => {
                    const {flag} = country
                    const commonName = country.name.common || "empty"
                    return (
                        <Link to={`/countries/${commonName}`} key={flag || index}>
                            <div key={flag || index}>
                                <CountryCard country={country}/>
                            </div>
                        </Link>
                    )
                })}
            </div>): <EmptySvg/>}
    </div>
}

export default Home

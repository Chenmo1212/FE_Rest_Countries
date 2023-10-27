import React, {useState, useEffect} from "react"
import './Home.css'
import {fetchAllCountries} from "../../axios/api";
import CountryCard from "./CountryCard/CountryCard";
import CountrySearch from "./CountrySearch/CountrySearch";
import LoadingHandle from "../../components/LoadingHandle/LoadingHandle";
import ErrorHandle from "../../components/ErrorHandle/ErrorHandle";
import EmptySvg from "../../components/EmptySvg/EmptySvg";

const EXTRA_LOADING_TIME = 300;
const ERROR_REMOVE_TIME = 3000;

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const handleLoading = () => {
        const timeId = setTimeout(() => {
            setLoading(false);
            clearTimeout(timeId);
        }, EXTRA_LOADING_TIME);
    }

    const handleError = (err) => {
        if (err.response) {
            setError(err.response.data.message);
        } else {
            setError('Failed to fetch country data.');
        }
        const timer = setTimeout(() => {
            setError(null);
            clearTimeout(timer);
        }, ERROR_REMOVE_TIME);
    };

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

        {loading
            ? <EmptySvg/>
            : (<div className="countries">
                {filtered.map((country, index) => {
                    const {flag} = country
                    return (
                        <div key={flag || index}>
                            <CountryCard country={country}/>
                        </div>
                    )
                })}
            </div>)}
    </div>
}

export default Home

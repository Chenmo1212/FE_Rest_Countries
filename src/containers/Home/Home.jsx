import React, {useState, useEffect} from "react"
import './Home.css'
import {fetchAllCountries} from "../../axios/api";
import CountryCard from "./CountryCard/CountryCard";
import CountrySearch from "./CountrySearch/CountrySearch";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        fetchAllCountries().then(res => {
            setCountries(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (!searchInput) setFiltered(countries)
    }, [countries, searchInput])

    return <div className="home">
        <CountrySearch
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setFiltered={setFiltered}
            setCountries={setCountries}
            countries={countries}
        />

        <div className="countries">
            {filtered.map((country, index) => {
                const {flag} = country
                return (
                    <div key={flag || index}>
                        <CountryCard country={country}/>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Home

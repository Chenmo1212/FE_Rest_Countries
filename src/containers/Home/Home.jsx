import React, {useState, useEffect} from "react"
import './Home.css'
import {fetchAllCountries} from "../../axios/api";
import CountryCard from "./CountryCard/CountryCard";

const Home = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetchAllCountries().then(res => {
            setCountries(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return <div className="home">
        {countries.map((country, index) => {
            const {flag} = country
            return (
                <div key={flag || index}>
                    <CountryCard country={country}/>
                </div>
            )
        })}
    </div>
}

export default Home

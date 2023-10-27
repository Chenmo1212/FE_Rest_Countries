import React from "react"
import "./CountrySearch.css"
import {fetchCountryData} from "../../../axios/api"

/**
 * Used to limit a function to be executed only once if it is triggered continuously.
 * @param func: The function to be executed.
 * @param delay: The number of milliseconds to delay.
 * @returns {(function(): void)|*}
 */
const debounce = (func, delay) => {
    let timeoutId;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

const DELAY_TIME = 300;

const CountrySearch = ({
                           setSearchInput,
                           setLoading,
                           setFiltered,
                           handleError,
                           countries,
                       }) => {
    // Prevent page reload when submitting the form
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // Search countries
    const searchCountries = (searchValue) => {
        setSearchInput(searchValue)

        if (searchValue) {
            setLoading(true);
            fetchCountryData(searchValue).then(res => {
                setFiltered(res.data);
                setLoading(false);
            }).catch(err => {
                handleError(err);
                setFiltered([])
                setLoading(false);
            })
        } else {
            setFiltered(countries)
        }
    }

    const debouncedSearch = debounce(searchCountries, DELAY_TIME);

    return (
        <>
            <div className="search">
                <form className="form" id="form" onSubmit={handleSubmit}>
                    <label htmlFor="search" className="visually-hidden">Search Country</label>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        autoComplete="off"
                        placeholder="Search Country"
                        onChange={(e) => debouncedSearch(e.target.value)}
                    />
                    <button type="submit" className="visually-hidden">Search</button>
                </form>
            </div>
        </>
    )
}

export default CountrySearch

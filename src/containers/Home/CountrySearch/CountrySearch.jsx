import React from "react"
import "./CountrySearch.css"

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

const DELAY_TIME = 500;

const CountrySearch = ({
                           setSearchInput,
                           setFiltered,
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
            const filteredCountries = countries.filter((country) =>
                Object.values(country.name["official"])
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            )
            setFiltered(filteredCountries)
        } else {
            setFiltered(countries)
        }
    }

    const debouncedSearch = debounce(searchCountries, DELAY_TIME);

    return (
        <>
            <div className="search">
                <form className="form" id="form" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        autoComplete="off"
                        placeholder="Search Country"
                        onChange={(e) => debouncedSearch(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}

export default CountrySearch

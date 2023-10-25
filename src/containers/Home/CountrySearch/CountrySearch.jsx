import React from "react"
import "./CountrySearch.css"

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
                        onChange={(e) => searchCountries(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}

export default CountrySearch

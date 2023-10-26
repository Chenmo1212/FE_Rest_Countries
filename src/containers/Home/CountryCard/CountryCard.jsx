import React from 'react';
import './CountryCard.css'

const CountryCard = ({country}) => {
    const {name, flag, flags, population, region, capital} = country

    const detailSections = [
        {label: 'Name', value: name["common"]},
        {label: 'Population', value: population.toLocaleString()},
        {label: 'Region', value: region},
        {label: 'Capital', value: capital},
    ]

    const renderDetailsSection = (section) => (
        <div key={section.label}>
            <h4>
                {section.label}: <span>{section.value}</span>
            </h4>
        </div>
    );

    return (
        <div className="country-card">
            <article key={flag}>
                <div className="flag" style={{backgroundImage: `url(${flags['png']})`}}/>
                <div className="details">
                    {detailSections.map(renderDetailsSection)}
                </div>
            </article>
        </div>
    );
};

export default CountryCard;
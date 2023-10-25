import React from 'react';
import './CountryCard.css'

const CountryCard = ({country}) => {
    const {name, flag, flags, population, region, capital} = country
    return (
        <div className="country">
            <article key={flag}>
                <div className="flag" style={{backgroundImage: `url(${flags['png']})`}}/>
                <div className="details">
                    <h4 className="country-name">
                        Name: <span>{name["official"]}</span>
                    </h4>
                    <h4>
                        Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                        Region: <span>{region}</span>
                    </h4>
                    <h4>
                        Capital: <span>{capital}</span>
                    </h4>
                </div>
            </article>
        </div>
    );
};

export default CountryCard;
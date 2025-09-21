import React, { use } from 'react';
import Country from './Country';

const Countries = ({ countriePromise }) => {
    const countriesData = use(countriePromise);
    const country = countriesData.countries
    // console.log(country)

    return (
        <div>
            <h1>Big Jeel how many time : {country.length}</h1>
            <div className='countries'>
                {
                    country.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
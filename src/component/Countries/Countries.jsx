import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({ countriePromise }) => {
    const countriesData = use(countriePromise);
    const country = countriesData.countries
    // console.log(country)
    const [visitedCountry,setvisitedCountry] = useState([])

    const handlevisitedCountry = (country)=>{
        console.log("set visit ",country)
    }

    return (
        <div>
            <h1>Big Jeel how many time : {country.length}</h1>
            <div className='countries'>
                {
                    country.map(country => <Country key={country.ccn3.ccn3} country={country} handlevisitedCountry={handlevisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
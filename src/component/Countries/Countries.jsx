import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({ countriePromise }) => {
    const countriesData = use(countriePromise);
    const country = countriesData.countries
    // console.log(country)
    const [visitedCountry,setvisitedCountry] = useState([])

    const handlevisitedCountry = (country)=>{
        // console.log("set visit ",country)
        const newVisitedCountry = [...visitedCountry,country]
        setvisitedCountry(newVisitedCountry)
       

    }

    return (
        <div>
            <h1>Total Country : {country.length}</h1>
            <h3>Total Visited: {visitedCountry.length}</h3>
            <ol>
               {
                visitedCountry.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
               }
            </ol>
            <div className='countries'>
                {
                    country.map(country => <Country key={country.ccn3.ccn3} country={country} handlevisitedCountry={handlevisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
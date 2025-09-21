
import { useState } from 'react';
import './Country.css'
  const Country = ({country,handlevisitedCountry}) => {
   const [visited , setVisited] =useState(false)

    const handleVisited = ()=>{
        if(visited){
            alert("Not Visited")
            setVisited(false)
        }
        else{
            alert("visited")
            setVisited(true)
        }
       handlevisitedCountry(country)
    }
    return (
        <div className={`country ${visited?'visited':''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: <small> ({country.name.common})</small> </h3>
            <h3>Captital: ({country.capital.capital})</h3>
           <h3>Area: {country.area.area} {
           country.area.area>300000? " 'This is Big COuntry'":" 'This is small country'"
           }</h3>
            <h3>Continents:{country.continents.continents}</h3>
            <h3>Population:{country.population.population}</h3>
            <p>Region : {country.region.region}</p>
            <button onClick={handleVisited}>
               {
                visited?"Visited":"Not Visited"
               }
                </button>
        </div>
    );
};

export default Country;
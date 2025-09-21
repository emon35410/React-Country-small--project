import React from 'react'; 
import './Country.css'
  const Country = ({country}) => {
    // console.log(country.name.common)

    const handleVisited = ()=>{
        alert("visited");
    }
    return (
        <div className='country'>
            <h3>Name: <small> ({country.name.common})</small> </h3>
            <h3>Captital: ({country.capital.capital})</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h3>Area: {country.area.area} {
           country.area.area>300000? " 'This is Big COuntry'":" 'This is small country'"
           }</h3>
            <h3>Continents:{country.continents.continents}</h3>
            <h3>Population:{country.population.population}</h3>
            <p>Region : {country.region.region}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;
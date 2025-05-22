import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  console.log(country);

  const { name, flags, capital, population, area } = country;

  const [visited,setVisited] = useState(false);
  function handleVisited(){
    setVisited(!visited);
  }
    // console.log(handleVisitedCountries);
    
    
  return (
    <div className={`country-info ${visited && 'visited'}`}>
      <img className="flag-img" src={flags.png} alt="" />
      <div>
        <h3>
          <span>Country Name :</span> {name?.common}
        </h3>
        <h4>
          <span>officail Name :</span> {name?.official}
        </h4>
        <h4>
          <span>Capital :</span> {capital}{" "}
        </h4>
      </div>
      <h4>
        <span>Population: </span>
        {population} <span>Area : </span>
        {area}
      </h4>
      <button onClick={()=>{handleVisitedCountries(country)} }>Mark Visited</button> <br />
          <button onClick={()=>{handleVisitedFlags(country.flags.png)}}>Adding flag</button>
      <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
      {
        visited ?  'I have visited this country' : 'I want to visit'
      }
      <hr />
      <CountryDetails country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} >
        
      </CountryDetails>
    </div>
  )
};

export default Country;

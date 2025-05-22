import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags]= useState([]);


    const handleVisitedCountries = country=> {
     const newVisitedCountries = [...visitedCountries, country];
     setVisitedCountries(newVisitedCountries)          
    }

        const handleVisitedFlags = flag =>{
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
        
     }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h4>Visted Countries</h4>
                <ul className="visited-countries">
                        {
                            visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                        }
                </ul>
            </div>
            <div className="visited-flag">
                {
                    visitedFlags.map((flag, idx) =><img key={idx} src={flag} />)
                }
            </div>
            <div className="box">
                {
               countries.map(country=><Country handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}  key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
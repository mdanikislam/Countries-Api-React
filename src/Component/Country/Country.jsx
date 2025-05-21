import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    
    const {name,flags,capital}= country;
    

    return (
        <div className='country-info'>
            <img className='flag-img' src={flags.png} alt="" />
            <div><h3><span>Country Name  :</span> {name?.common}</h3>
            <h4><span>officail Name  :</span> {name?.official}</h4>
            <h4><span>Capital :</span> {capital} </h4></div>
            
        </div>
    );
};

export default Country;
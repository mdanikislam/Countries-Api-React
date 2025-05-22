const CountryData = ({ country }) => {
    const {region, continents}=country;
  return (
    <div>
      <h4>Country Data : </h4>
      <p><small>Region: {region}</small></p>
      <p><small>Continents: {continents}</small></p>
      
    </div>
  );
};

export default CountryData;

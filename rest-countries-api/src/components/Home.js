import React, { useState, useEffect } from 'react';
import API from '../API'
const Home = () => {
    const [countries, setCountries] = useState([]);
    const searchName = '';
    const fetchCountriesData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json()
            setCountries(data);
       
        } catch (error) {
            console.log(error.message)
        }
   }
    useEffect(() => {
        fetchCountriesData(searchName)
        
    }, []);
    return (
        <> 
           <div className="row justify-content-center">
                {countries.map(country => (
                    <div className="card col-sm-6 col-md-3 m-1" style={{ width: '200px' }} key={country.cca2}>
                        <img src={country.flags.png} className="card-img-top" alt="..." />
                         <div className="card-body">
                            <p className="card-text">{country.name.common}</p>
                        </div>
                        
                        
                    </div>
                ))}
           </div>
        </> 
    )
}

export default Home;
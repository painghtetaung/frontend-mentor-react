import React from 'react';


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'


//Components
import FilterBar from './FilterBar';
import HeaderBar from './HeaderBar';

const Home = () => {
    const { countries, setSearchName, setRegionName, error} = useHomeFetch()
   
   
    return (
        <>
            <HeaderBar></HeaderBar>
        <div className="container"> 
            <FilterBar setSearchName={setSearchName} setRegionName={setRegionName}></FilterBar>
           { countries &&
                <div className="row justify-content-center">
                {error && <div>Country Not Found</div>}
                {/* {regionName === "Select Region" || !regionName ? <div>You haven't selected any region</div> : <div>Region: {regionName}</div>} */}
                 {countries.map(country => {
                     const { name, population, cca2, flags, region, capital } = country
                     return (
                         <div className="card col-sm-6 col-md-3 m-1 mb-5 p-0" style={{ width: '250px', height: '380px' }} key={cca2}>
                             <img src={flags.png} className="card-img-top p-0 h-100" alt="..." />
                             <div className="card-body h-100 mt-3">
                                 <h5 className="card-title ctitle mb-3">{name.common}</h5>
                                 <p className="card-text mb-1"><span className="country-attri">Population:</span> {population}</p>
                                 <p className="card-text mb-1"><span className="country-attri">Region:</span> {region}</p>
                                 <p className="card-text mb-4"><span className="country-attri">Capital:</span> {capital}</p>
                             </div>
                         
                         
                         </div>
                     )    
                 })
                     
                 }
                </div>
           
           }

           
        </div> 
        </>
    )
}

export default Home;
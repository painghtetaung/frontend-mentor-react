import React from 'react';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'

//Components
import FilterBar from './FilterBar';

const Home = () => {
    const { countries, setSearchName, error} = useHomeFetch()
    
   
    return (
        <> 
            <FilterBar setSearchName={setSearchName}></FilterBar>
           <div className="row justify-content-center">
               {error && <div>Country Not Found</div>}
                {countries.map(country => {
                    const { name, population, cca2, flags, region, capital } = country
                    return (
                        <div className="card col-sm-6 col-md-3 m-1 mb-5 p-0" style={{ width: '250px', height: '380px' }} key={cca2}>
                            <img src={flags.png} className="card-img-top p-0 h-100" alt="..." />
                            <div className="card-body h-100">
                                <h5 className="card-title ctitle">{name.common}</h5>
                                <p className="card-text mb-1">Population: {population}</p>
                                <p className="card-text mb-1">Region: {region}</p>
                                <p className="card-text mb-4">Capital: {capital}</p>
                            </div>
                        
                        
                        </div>
                    )    
                })
                    
                }
           </div>
        </> 
    )
}

export default Home;
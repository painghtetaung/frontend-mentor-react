import React from 'react';


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'


//Components
import FilterBar from './FilterBar';
import CountryCard from './CountryCard'; 

const Home = () => {
    const { countries, setSearchName, setRegionName, error} = useHomeFetch()
    return (
        <>
            <div className="container">
            <FilterBar setSearchName={setSearchName} setRegionName={setRegionName}></FilterBar>
            </div>
            
                <CountryCard countries={countries} error={error}></CountryCard>
            
        </>
    )
}

export default Home;
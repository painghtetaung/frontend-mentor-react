import React from 'react';


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'

//Spinner
import Spinner from './Spinner'
//Components
import FilterBar from './FilterBar';
import CountryCard from './CountryCard'; 

const Home = () => {
    const { countries, setSearchName, setRegionName, error, loading} = useHomeFetch()
    return (
        <>
            <div className="container">
            <FilterBar setSearchName={setSearchName} setRegionName={setRegionName}></FilterBar>
            </div>
                { loading && <Spinner></Spinner> }
                <CountryCard countries={countries} error={error}></CountryCard>
            
        </>
    )
}

export default Home;
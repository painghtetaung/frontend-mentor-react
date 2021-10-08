import React from 'react';


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'


//Components
import FilterBar from './FilterBar';
import MovieCard from './MovieCard'; 

const Home = () => {
    const { countries, setSearchName, setRegionName, error} = useHomeFetch()
   
   
    return (
        <>
            <div className="container">
            <FilterBar setSearchName={setSearchName} setRegionName={setRegionName}></FilterBar>
            </div>
            <MovieCard countries={countries} error={error}></MovieCard>
        </>
    )
}

export default Home;
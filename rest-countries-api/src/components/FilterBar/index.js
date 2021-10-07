import React, { useState, useEffect } from 'react';

//Styles
import { Wrapper, SearchBar, Filter } from './FilterBar.Style'

const FilterBar = ({setSearchName, setRegionName}) => {
        const [inputName, setInputName] = useState('')

        const [filterRegion, setFilterRegion] = useState('')

        // var e = document.getElementById("filter");
        // var strUser = e.value;

        const searchByName = (e) => {
            const nameValue = e.currentTarget.value;
            setInputName(nameValue);
        }

        const searchByRegion = (e) => {
            const regionValue = e.currentTarget.value
            setFilterRegion(regionValue)
        }

        useEffect(() => {
            const timer = setTimeout(() => {
                setSearchName(inputName);
                setRegionName(filterRegion)
              }, 300);
            
            return () => clearTimeout(timer)
        }, [setSearchName, setRegionName, inputName, filterRegion])
    return (
        <Wrapper className="row justify-content-between">
            <SearchBar className="col-sm-6">
                <i className="fas fa-search"></i>
                    <input type="text"
                       
                        placeholder="Search for a country..."
                        onChange={searchByName}
                    />
            </SearchBar>
            <Filter className="col-sm-6">
                
                <select name="select" onChange={searchByRegion}>
                
                        <option value="0">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                </select>
              
            </Filter>
        </Wrapper>
    )
}

export default FilterBar;
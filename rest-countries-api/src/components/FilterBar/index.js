import React, { useState, useEffect } from 'react';

//Styles
import { Wrapper } from './FilterBar.Style'

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
        <Wrapper>
            <i class="fa-regular fa-magnifying-glass"></i>
            <input type="text"
                className="form-control"
                placeholder="Search for a country..."
                onChange={searchByName}
            />


            <select id="filter" onChange={searchByRegion} className="form-select w-25" aria-label="Default select example">
                <option value="0">Select Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </Wrapper>
    )
}

export default FilterBar;
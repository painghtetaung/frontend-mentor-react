import React, { useState, useContext, useEffect } from 'react';
//Styles
import { Wrapper, SearchBar, Filter } from './FilterBar.Style'

//Context
import LightContext from '../LightContext'

const FilterBar = ({setSearchName, setRegionName}) => {
        //LightMode-Context
        const [light, setLight] = useContext(LightContext)
        //
        const [inputName, setInputName] = useState('')

        const [filterRegion, setFilterRegion] = useState('')
       
        const searchByName = (e) => {
            const nameValue = e.currentTarget.value;
            setInputName(nameValue);
        }

        const searchByRegion = (e) => {
            const regionValue = e.currentTarget.value
            setFilterRegion(regionValue)
        }


        useEffect(() => {
            const changeMode = (light) => {
                const filterBar = document.querySelector(".filterBar")
                const searchBar = document.querySelector(".searchBar")
               
                if(light) {
                    filterBar.classList.add("light-theme")
                    searchBar.classList.add("light-theme")
                    
                }else {
                    
                        filterBar.classList.remove("light-theme")
                        searchBar.classList.remove("light-theme")
    
                }
                    
            }
             changeMode(light)
           
        },[light, setLight])


        useEffect(() => {
            const timer = setTimeout(() => {
                setSearchName(inputName);
                setRegionName(filterRegion)
              }, 300);
            
            return () => clearTimeout(timer)
        }, [setSearchName, setRegionName, inputName, filterRegion])
    return (
        <Wrapper className="row justify-content-between">
            <SearchBar className="col-sm-6 searchBar">
                <i className="fas fa-search"></i>
                    <input type="text"
                       
                        placeholder="Search for a country..."
                        onChange={searchByName}
                    />
            </SearchBar>
            <Filter className="col-sm-6 filterBar">
                
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
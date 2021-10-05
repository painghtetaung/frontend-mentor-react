import { useState, useEffect } from 'react';

// API
import API from '../API'

export const useHomeFetch = () => {

    const [searchName, setSearchName] = useState('')
    const [regionName, setRegionName] = useState('')
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(false)


    const fetchCountriesData = async(searchName) => {
        try {
            setError(false)
            const fetchCountries = await API.fetchCountries(searchName)
            setCountries(fetchCountries);


        } catch (err) {

            setError(true)

        }
    }

    const fetchFilterCountries = async(regionName) => {
        try {
            const filterCountries = await API.filterCountries(regionName)
            setCountries(filterCountries) 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCountriesData(searchName)
    }, [searchName]);

    useEffect(() => {
        fetchFilterCountries(regionName)
    }, [regionName])

    return { countries, setSearchName, setRegionName, regionName, error }
}
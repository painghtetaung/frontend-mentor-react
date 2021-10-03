import { useState, useEffect } from 'react';

// API
import API from '../API'

export const useHomeFetch = () => {

    const [searchName, setSearchName] = useState('')
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

    useEffect(() => {
        fetchCountriesData(searchName)

    }, [searchName]);


    return { countries, setSearchName, error }
}
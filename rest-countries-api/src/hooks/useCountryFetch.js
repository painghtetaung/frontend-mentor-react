import { useState, useEffect } from 'react'

//API
import API from '../API'

export const useCountryFetch = (countryId) => {
    const [ country, setCountry ] = useState([])
    const [error, setError] = useState(false)
    
    //fetchingcountry
    const fetchCountry = async(countryId) => {
       try {
        const data = await API.fetchCountry(countryId)
        setCountry(data)
      
        setError(false)
      
       } catch (error) {
           console.log(error)
       }
    }

    useEffect(() => {
        fetchCountry(countryId)
      
    },[countryId])

    return {country, error}    
}
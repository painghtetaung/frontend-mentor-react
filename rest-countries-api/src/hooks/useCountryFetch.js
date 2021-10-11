import { useState, useEffect, useContext, useCallback } from 'react'
//LightContext
import LightContext from '../../src/components/LightContext'
//API
import API from '../API'

export const useCountryFetch = (countryId) => {
    const [ country, setCountry ] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [light] = useContext(LightContext)

    const changeMode = (light) => {
        
        const borderName = document.querySelectorAll(".border-name")
        if(light) {
            
             if(borderName) {
                borderName.forEach((bordername) => {
                    bordername.classList.add("light-theme")
                    })
             }
            
        }else{
           
            if(borderName) {
                borderName.forEach((bordername) => {
                    bordername.classList.remove("light-theme")
                })
                
            }
        }
    }
    //fetchingcountry
    const fetchCountry = useCallback(async(countryId) => {
       try {
        setLoading(true)
        await changeMode(light)
        const data = await API.fetchCountry(countryId)
        setCountry(data)
        await changeMode(light)
        setError(false)
      
       } catch (error) {
           console.log(error)
       }
       setLoading(false)
    },[light])

    useEffect(() => {
        fetchCountry(countryId)
      
    },[countryId, light, fetchCountry])

    return {country, error, loading}    
}
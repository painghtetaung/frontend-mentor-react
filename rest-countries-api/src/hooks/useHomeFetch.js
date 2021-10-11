import { useState, useEffect, useCallback, useContext } from 'react';


//context
import LightContext from '../../src/components/LightContext'
// API
import API from '../API'

export const useHomeFetch = () => {

    const [searchName, setSearchName] = useState('')
    const [regionName, setRegionName] = useState('')
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(false)
        //LightMode-Context
    const [light, setLight] = useContext(LightContext)

    const changeMode = (light) => {
        const countryCard = document.querySelectorAll(".card")

        if (light) {
            if (countryCard) {
                countryCard.forEach((Card) => {
                    Card.classList.add("light-theme")
                    console.log("modea after add from card" + light)
                })
            }
        } else {
            countryCard.forEach((Card) => {
                Card.classList.remove("light-theme")
                console.log("modea after remove from card" + light)
            })
        }
    }




    const fetchCountriesData = useCallback(async(searchName) => {
        try {
            await changeMode(light)
            setError(false)
            const fetchCountries = await API.fetchCountries(searchName)
            setCountries(fetchCountries);
            await changeMode(light)


        } catch (err) {

            setError(true)

        }
    }, [light])

    const fetchFilterCountries = useCallback(async(regionName) => {
        try {
            await changeMode(light)
            const filterCountries = await API.filterCountries(regionName)
            setCountries(filterCountries)
            await changeMode(light)
        } catch (error) {
            console.log(error)
        }
    }, [light])

    useEffect(() => {
        fetchCountriesData(searchName)
    }, [searchName, fetchCountriesData, light]);

    useEffect(() => {
        fetchFilterCountries(regionName)
    }, [regionName, fetchFilterCountries, light])

    return { countries, setSearchName, setRegionName, regionName, error }
}
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
    const [loading, setLoading] = useState(false)
        //LightMode-Context
    const [light] = useContext(LightContext)

    const changeMode = (light) => {
        const countryCard = document.querySelectorAll(".card")

        if (light) {
            if (countryCard) {
                countryCard.forEach((Card) => {
                    Card.classList.add("light-theme")
                    // console.log("mode after add from card" + light)
                })
            }
        } else {
            countryCard.forEach((Card) => {
                Card.classList.remove("light-theme")
                // console.log("mode after remove from card" + light)
            })
        }
    }




    const fetchCountriesData = useCallback(async(searchName) => {
        try {
            setLoading(true)
            await changeMode(light)
            setError(false)
            const fetchCountries = await API.fetchCountries(searchName)
            setCountries(fetchCountries);
            await changeMode(light)


        } catch (err) {

            setError(true)

        }
        setLoading(false)
    }, [light])

    const fetchFilterCountries = useCallback(async(regionName) => {
        try {
            setLoading(true)
            await changeMode(light)
            const filterCountries = await API.filterCountries(regionName)
            setCountries(filterCountries)
            await changeMode(light)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }, [light])

    useEffect(() => {
        fetchCountriesData(searchName)
    }, [searchName, fetchCountriesData, light]);

    useEffect(() => {
        fetchFilterCountries(regionName)
    }, [regionName, fetchFilterCountries, light])

    return { countries, setSearchName, setRegionName, regionName, error, loading }
}
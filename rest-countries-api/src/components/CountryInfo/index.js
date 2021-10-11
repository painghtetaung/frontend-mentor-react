import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useCountryFetch } from '../../hooks/useCountryFetch'
import {Wrapper} from './CountryInfo.Style'

//LightContext
import LightContext from '../LightContext'
const CountryInfo = () => {
    const { countryId } = useParams()
    const { country, error } = useCountryFetch(countryId);
    const [light] = useContext(LightContext)

    const changeMode = (light) => {
        const backBtn = document.querySelector(".back-btn")
        const borderName = document.querySelectorAll(".border-name")
        if(light) {
            backBtn.classList.add("light-theme")
                borderName.forEach((bordername) => {
                    bordername.classList.add("light-theme")
                })
            
        }else{
            backBtn.classList.remove("light-theme")
            borderName.forEach((bordername) => {
                bordername.classList.remove("light-theme")
            })
            
        }
    }

    useEffect(() => {
        changeMode(light)
    },[light])
    // const name = country.map(countryInfo => countryInfo.name.common)
    return (
        <>  
            <Wrapper className="container">
                <Link className="back-link" to="/">
                    <div className="back-btn">
                        <span className="arrow-icon"><i className="fas fa-arrow-left"></i></span>
                        <p className="back-text">Back</p>
                    </div>
                </Link>
                
                {country.map(countryInfo => {
                    const { name, translations, flags, cca2, tld, population, region, subregion, capital, currencies, languages, borders } = countryInfo
                    const currencyName = Object.keys(currencies)[0]//to get the dynamic properties of object
                    const languagesName = Object.values(languages)
                    return (
                    <div className="country-content" key={cca2}>
                        <div className="content-img">
                           <img src={flags.png} alt="" />
                        </div>
                        <div className="content-info">
                            <div className="info">
                                <div className="info-1">
                                    <p className="country-title">{name.common}</p>
                                    <p><span className="country-text">Native Name: </span>{translations.nld.common}</p>
                                    <p><span className="country-text">Population: </span>{population}</p>
                                    <p><span className="country-text">Region: </span>{region}</p>
                                    <p><span className="country-text">Sub Region: </span>{subregion}</p>
                                    <p><span className="country-text">Capital: </span>{capital}</p>
                                </div>
                                <div className="info-2">
                                    <p><span className="country-text">Top Level Domain: </span>{tld}</p>
                                    <p><span className="country-text">Currencies: </span>{currencies[currencyName].name}</p>
                                    <p><span className="country-text">Languages: </span>{languagesName.join(", ")}</p>   
                                </div>
                            </div>
                            <div className="border-countries">
                                <p className="border-title">Border Countries</p>
                                <div className="border-names-wrapper">
                                {
                                    borders.map(border => (
                                        <div className="border-name">{border}</div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                
            </Wrapper>
        </>
    )
}

export default CountryInfo;
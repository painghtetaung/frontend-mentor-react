import React from 'react'
import { useParams } from 'react-router'
import { useCountryFetch } from '../../hooks/useCountryFetch'
import {Wrapper} from './CountryInfo.Style'
const CountryInfo = () => {
    const { countryId } = useParams()
    const { country, error } = useCountryFetch(countryId);
    // const name = country.map(countryInfo => countryInfo.name.common)
    return (
        <>  
            <Wrapper className="container">
                <div className="back-btn">
                    <span className="arrow-icon"><i className="fas fa-arrow-left"></i></span>
                    <p className="back-text">Back</p>
                </div>
                
                {country.map(countryInfo => {
                    const { name, population } = countryInfo
                    return (
                        <div className="country-content">
                    <div className="content-img">
                       {name.common}
                       {population}
                    </div>
                    <div className="content-info">
                       <div className="info">
                            <div className="info-1">

                            </div>
                            <div className="info-2">
                                
                            </div>
                       </div>
                       <div className="border-countries">

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
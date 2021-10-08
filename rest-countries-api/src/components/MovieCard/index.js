import React from 'react'

const MovieCard = ({countries, error}) => {
    return (
        <div className="container"> 
            
            { countries &&
                <div className="row card-row">
                {error && <div>Country Not Found</div>}
                {/* {regionName === "Select Region" || !regionName ? <div>You haven't selected any region</div> : <div>Region: {regionName}</div>} */}
                {countries.map(country => {
                     const { name, population, cca2, flags, region, capital } = country
                        return (
                        <div className="card col-sm-3 col-md-3 m-1 mb-5 p-0" key={cca2}>
                            <img src={flags.png} className="card-img-top p-0" style={{ height: '80%' }} alt="..." />
                            <div className="card-body h-100 mt-3">
                                <h5 className="card-title ctitle mb-3">{name.common}</h5>
                                <p className="card-text mb-1"><span className="country-attri">Population:</span> {population}</p>
                                <p className="card-text mb-1"><span className="country-attri">Region:</span> {region}</p>
                                <p className="card-text mb-4"><span className="country-attri">Capital:</span> {capital}</p>
                            </div>
                        
                     
                        </div>
                 )    
             })
                 
             }
            </div>
       
       }

       
    </div> 
    )
}

export default MovieCard;
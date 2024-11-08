{/*The Country.jsx component display details about individual countries. 
    At least the following details needs to be displayed for each country:
    country flag
    country name
    country's capital
    country's population
    country's area
    country's continents
    country's sub-region 
    */}

    export default function Country({ data }) {
        return(
            <div className="singleCountryContainer">
                <div className="countryName">
                    <img src={data.flags.svg} alt={data.flags.alt} />
                    <h3>{data.name.common}</h3>
                </div>
                <div className="countryInfo">
                    <div className="countrySingleInfo">
                        <strong>Official Name: </strong>
                        <p>Name</p>
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Capital: </strong>
                        <p>{data.capital}</p>
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Population: </strong>
                        <p>{data.population}</p>
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Languages: </strong>
                        {/* <p>{Object.values(data.languages).join(', ')}</p> */}
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Currency: </strong>
                        {/* <p>{Object.values(data.currencies).join(', ')}</p> */}
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Area (mi2): </strong>
                        <p>{data.area}</p>
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Subregion: </strong>
                        <p>{data.subregion}</p>
                    </div>
                    <div className="countrySingleInfo">
                        <strong>Continents: </strong>
                        <p>{data.continents}</p>
                    </div>
                    <a href={data.maps.googleMaps} target="_blank">Show on Google Maps</a>
                </div>
            </div>
        )
    }
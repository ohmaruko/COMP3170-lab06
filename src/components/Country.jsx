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
                    {data.languages ? (
                    <p>{Object.values(data.languages).join(', ')}</p>
                    ) : (<p>N/A</p>)}
                </div>
                <div className="countrySingleInfo">
                    <strong>Currency: </strong>
                    {data.currencies ? 
                        Object.values(data.currencies).map((item) => (
                            <p>{item.name}({item.symbol})</p>
                        ))
                        : <p>N/A</p>}
                </div>
                <div className="countrySingleInfo">
                    <strong>Area (mi2): </strong>
                    <p>{data.area}</p>
                </div>
                <div className="countrySingleInfo">
                    <strong>Subregion: </strong>
                    {data.subregion ? 
                        <p>{data.subregion}</p> : <p>N/A</p>
                    }
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
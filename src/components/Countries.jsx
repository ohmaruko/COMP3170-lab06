// The Countries.jsx component receive data and displays it using the Country.jsx component
import Country from "./Country"

export default function Countries({ data }) {
    return(
        <div className="countriesContainer">
            {
                data.map( (country, index) => (
                    <Country key={index} data={country} />
                ))
            }
        </div>
    )
}
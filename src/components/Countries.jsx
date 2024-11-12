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
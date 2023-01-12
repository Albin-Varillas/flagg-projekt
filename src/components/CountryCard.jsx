import React from "react"
import { Link } from "react-router-dom"
import BorderCountries from "./BorderCountriesCard"

export default function CountryCard({ info }) {
    console.log(info.cca3)
    return (
        <div>
            <img src={info.flags.png} alt="" />
            <h3>{info.name.common}</h3>
            <p>Native Name: {info.name.official}</p>
            <p>Population: {info.population} ---------------PUT","</p>
            <p>Region: {info.region}</p>
            <p>Subregion: {info.subregion}</p>
            <p>Capital: {info.capital}</p>
            <br />
            <p>Top Level Domain: {info.tld}</p>
            <p>Currecies: {Object.values(info.currencies)[0].name}</p>
            <p>
                Languages: {Object.values(info.languages)} ---------------PUT
                ","
            </p>
            <br />
            <div>
                Border Countries:
                {info.borders.map((borderCountries) => (
                    <Link to={`/${info.cca3}`}>
                        <button>{borderCountries}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

import React from "react"
import { Link } from "react-router-dom"

export default function Card({ country }) {
    return (
        <Link to={`/${country.name.common}`} className="card">
            <img src={country.flags.png} alt="" />
            <p>{country.name.common}</p>
        </Link>
    )
}

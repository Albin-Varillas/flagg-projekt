import React from "react"

export default function Card({ country }) {
    return (
        <div className="card">
            <img src={country.flags.png} alt="" />
            <p>{country.name.common}</p>
        </div>
    )
}

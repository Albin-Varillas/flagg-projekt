import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CountryCard from "../components/CountryCard"

export default function Country() {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                "https://restcountries.com/v3.1/name/" + name
            )
            const data = await response.json()
            console.log(data)
            setCountry(data)
        }
        getData()
    }, [])
    return (
        <div>
            <div className="cards-wrapper">
                {country?.map((info) => (
                    <CountryCard info={info} />
                ))}
            </div>
        </div>
    )
}

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BorderCountries() {
    const [countries, setCountries] = useState([])
    const { neighbour } = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                "https://restcountries.com/v3.1/alpha/" + neighbour
            )
            const data = await response.json()
            console.log(data)
            setCountries(data)
        }
        getData()
    })

    return <div>{countries}</div>
}

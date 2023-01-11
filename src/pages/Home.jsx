import React, { useEffect, useState } from "react"
import Card from "../components/Card"

export default function Home() {
    const [contruies, setCountries] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            console.log(data)
            setCountries(data)
        }
        getData()
    }, [])

    return (
        <div>
            Home
            <div className="cards-wrapper">
                {contruies?.map((country) => (
                    <Card country={country} />
                ))}
            </div>
        </div>
    )
}

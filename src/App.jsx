import "./App.css"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Country from "./pages/Country"
import BorderCountries from "./pages/BorderCountries"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<Country />} />
                <Route path="/:neighbour" element={<BorderCountries />} />
            </Routes>
        </div>
    )
}

export default App

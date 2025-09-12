import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Register from '../Pages/Register'
import Login from '../Pages/Login'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </div>
    )
}

export default MainRoutes
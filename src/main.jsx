
import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header/Header.jsx'
import RandomDog from './RandomDog/RandomDog.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/randomDogImage" element={<RandomDog />} />
            </Routes>
        </BrowserRouter>
    </div>
)

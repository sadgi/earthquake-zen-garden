
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import Header from './components/Header'
import Listing from './components/Earthquakes/Listing'
import Details from './components//Earthquakes/Details'
import Profile from './components/Profile'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/profile" element={<Profile />} >
                    </Route>
                    <Route exact path="/" element={<Listing />} >
                    </Route>
                    <Route path="/details/:id" element={<Details />}>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
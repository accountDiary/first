import React, { useState, useEffect } from "react";
import "./App.css";
import FullCalendar1 from "./Components/Container/Calendar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

    return (
        <div className="App">
            <Header />
            <div className="Calendar">
                <FullCalendar1 />
            </div>
            <Footer />
        </div>
    );
}

export default App;

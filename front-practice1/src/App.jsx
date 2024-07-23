import React from "react";
import "./App.css";
import FullCalendar1 from "./Components/Container/Calendar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";
<<<<<<< Updated upstream
import { Provider } from 'react-redux';
import store from './Redux/store.js';


function App() {

    return (
        <Provider store={store}>      
            <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/createAccount" element={<CreateAccount />} />
                    <Route path="/" element={<FullCalendar1 />} />
                </Routes>
               
                <Footer />
            </div>
        </BrowserRouter>
        </Provider>

=======

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/createAccount" element={<CreateAccount />} />

                    <Route path="/" element={<FullCalendar1 />} />

                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
>>>>>>> Stashed changes
    );
}

export default App;

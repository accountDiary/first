import React from "react";
import "./App.css";
import FullCalendar1 from "./Components/Container/Calendar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AccountBook from "./Components/AccountBook/AccountBook.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<FullCalendar1 />} />
                    <Route path="/createAccount" element={<CreateAccount />} />
                    <Route path="/accountBook" element={<AccountBook />} />
                </Routes>
                
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

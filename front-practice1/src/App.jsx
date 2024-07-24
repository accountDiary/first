import React from "react";
import "./App.css";
import FullCalendar1 from "./Components/Container/Calendar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";
import { Provider } from 'react-redux';
import store from './Redux/store.js';

import AccountBook from "./Components/AccountBook/AccountBook.jsx";
import WriteDiary from "./Page/WriteDiary.jsx";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FullCalendar />,
      },
      {
        path: "/createAccount",
        element: <CreateAccount />,
      },
      {
        path: "/writeAccountBook",
        element: <AccountBook />,
      },
      {
        path: "/writeDiary",
        element: <WriteDiary />,
      },
    ],
  },
]);

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

    );
}

export default App;

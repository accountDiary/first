import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FullCalendar from "./Components/Container/Calendar.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";
import AccountBook from "./Components/AccountBook/AccountBook.jsx";

// const Layout = () => (
//     <div>
//         <Header />
//         <Outlet />
//         <Footer />
//     </div>
// );

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "/",
//                 element: <FullCalendar />,
//             },
//             {
//                 path: "/createAccount",
//                 element: <CreateAccount />,
//             },
//             {
//                 path: "/writeAccountBook",
//                 element: <AccountBook />,
//             },
//         ],
//     },
// ]);

function App() {
    return (
        // <RouterProvider router={router} />
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/createAccount" element={<CreateAccount />} />
                    <Route path="/writeAccountBook" element={<AccountBook />} />
                    <Route path="/" element={<FullCalendar />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
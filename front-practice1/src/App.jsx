import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FullCalendar from "./Components/Container/Calendar.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";
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
                path: "/accountBook",
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
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;

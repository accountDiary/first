import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import FullCalendar from "./Container/Calendar";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";

function App() {
    // const [message, setMessage] = useState("");
    const [userList, setUserList] = useState([]);

    useEffect(() => {
            // hello();
            userData();
    }, []);

    // const hello = async() => {
    //     await axios
    //         .get("/api/user/test/hello")
    //         .then(response => {
    //             setMessage(response.data);
    //         })
    //         .catch(error => {
    //             console.error("error", error);
    //         });
    // }

    const userData = async() => {
        await axios
            .get("/api/user/test/list")
            .then(response => {
                setUserList(response.data.userList);
                console.log("1. ", response.data.userList);
                console.log("2. ", response.data);
            })
            .catch(error => {
                console.error("error", error);
            });
    }

    return (
      <div className="App">
        <Header />
        {/* <div>
            {userList.map
                (user => (
                    <div key={user.user_id}>
                        <p>이름: {user.user_name}</p>
                        <p>이메일: {user.user_email}</p>
                    </div>
                ))
            }
        </div> */}
        <div className="Calendar">
            <FullCalendar />
        </div>
        <Footer />
      </div>
    )
}

export default App;

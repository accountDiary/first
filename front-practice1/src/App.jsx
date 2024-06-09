import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import FullCalendar1 from './Container/Calendar';

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
                alert(response.data.userList);
            })
            .catch(error => {
                console.error("error", error);
            });
    }

    return (
      <div className="App">

        <div>
            {userList.map
                (user => (
                    <div key={user.user_id}>
                        <p>이름: {user.user_name}</p>
                        <p>이메일: {user.user_email}</p>
                    </div>
                ))
            }
        </div>
        <div className="Calendar">
            <FullCalendar1 />
        </div>
      </div>
    )
}

export default App;

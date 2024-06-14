import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";
import Search from "./Container/Search/Search";
import FullCalendar from "./Container/Calendar";

function App() {

    const [onePost, setOnePost] = useState();

    useEffect(() => {
        loadPost();
    }, []);

    const loadPost = async() => {
        await axios
         .post("/post/day")
         .then(response => {
            setOnePost(response.data.onePost);
             console.log("1. ", response.data.onePost);
             console.log("2. ", response.data);
         })
         .catch(error => {
             console.error("error", error);
         });
    }

    return (
        <div className="App">
            <div>
            {onePost ? (
                <div>
                    <h1>작성자: {onePost.post_writer}</h1>
                    <p>{onePost.content}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            </div>


            <Header />
            <Search></Search>
            
            
            
            <div className="Calendar">
                <FullCalendar />
            </div>
            <Footer />
        </div>
    )
}
export default App;

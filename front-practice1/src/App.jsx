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
                        <p>작성자: {onePost.post_writer}</p>
                        <p>제목: {onePost.title}</p>
                        <p>부제목: {onePost.sub_title}</p>
                        <p>내용: {onePost.content}</p>
                    </div>
                ) : (
                    <p>만약 null값이 나온다면 여기엔 글 작성란을 보여주거나 하기...</p>
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

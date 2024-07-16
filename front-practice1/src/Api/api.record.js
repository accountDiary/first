import axios from "axios";

// 
export const saveRecords = async (records) => {
    return await axios
        .post("/api/record/save", records)
        .then(response => response.data)
        .catch((error) => {
            console.error("에러: ", error);
        });
}
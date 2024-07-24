import axios from "axios";

// 가계부 기록 저장
export const saveRecords = async (records) => {
    return await axios
        .post("/api/record/save", records)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("저장 실패");
            }
        })
        .catch(error => {
            throw new Error(error.response ? error.response.data : error.message);
        });
}
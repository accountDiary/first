import axios from "axios";

// 이메일 중복 확인
export const getCheckEmail = async (formData) => {
    return await axios
            .post("/api/user/checkEmail", formData)
            .then(response => response.data)
            .catch((error) => {
                console.error("에러: ", error);
            });
};

// 회원 가입
export const getSaveUser = async (formData) => {
    return await axios
            .post("/api/user/saveUser", formData)
            .then(response => response.data)
            .catch((error) => {
                console.error("에러: ", error);
            });
}
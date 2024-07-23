import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/authSlice.js"
import "../../../Css/Modal.css";
import axios from "axios";

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const createAccountPage = () => {
    onClose();
    navigate("/createAccount");
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    console.log("Submitted credentials:", { email, password });
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });

      console.log("로그인 성공:", response.data);
      dispatch(login(response.data)); //로그인 성공시 REDUX 상태 업데이트
      onClose();
      navigate("/"); // 로그인 후 이동할 페이지 경로
    } catch (error) {
      console.error("로그인 실패:", error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <h2>로그인</h2>
      {error && <p className="error">{error.message}</p>}
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleSubmit}>
        로그인
      </button>
      <button className="signup-button" onClick={createAccountPage}>
        회원가입
      </button>
      <button className="close-button" onClick={handleClose}>
        닫기
      </button>
    </Modal>
  );
};

export default LoginModal;

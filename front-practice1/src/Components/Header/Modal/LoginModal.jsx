import React from "react";
import Modal from "react-modal";
import "../../../Css/Modal.css";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {

  // const moveCreateAccount = useNavigate();

  // function createAccountPage() {
  //   moveCreateAccount("/createAccount")  
  // }
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <h2>로그인</h2>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button onClick={onClose}>닫기</button>
      {/* <button onClick={createAccountPage}>회원가입</button> */}
    </Modal>
  );
};

export default LoginModal;

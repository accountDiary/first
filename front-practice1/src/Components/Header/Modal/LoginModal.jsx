import React from "react";
import Modal from "react-modal";
import "../../../Css/Modal.css";

const LoginModal = ({ onClose }) => {
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
    </Modal>
  );
};

export default LoginModal;

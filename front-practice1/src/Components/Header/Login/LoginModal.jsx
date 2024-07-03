import React, { useState } from "react";
import Modal from "react-modal";
import "../../../Css/Modal.css";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const createAccountPage = () => {
    onClose();
    navigate("/createAccount");
  };

  const handleClose = () => {
    onClose(); // 모달 닫기
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <h2>로그인</h2>

      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button className="login-button" type="button">
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

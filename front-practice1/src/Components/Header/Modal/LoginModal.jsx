import React from "react";
import Modal from "react-modal";
import "../../../Css/Modal.css";
import { Link } from "react-router-dom";

const LoginModal = ({ onClose }) => {

    const createAccountPage = () => {
        onClose(); // 모달 닫기
    };
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
            <Link to="/createAccount" onClick={createAccountPage}>회원가입</Link>
        </Modal>
    );
};

export default LoginModal;

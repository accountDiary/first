import React, { useState, useEffect } from "react";
import axios from "axios";

import WriteId from "./WriteId";
import Address from "./Address";

function CreateAccount() {

    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [tel, setTel] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [extraAddress, setExtraAddress] = useState("");
    const [isCheckEmail, setIsCheckEmail] = useState(false);
    const [isMessage, setIsMessage] = useState("");

    useEffect(() => {
        if (tel.length === 10) {
            setTel(tel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
        }
        if (tel.length === 13) {
            setTel(
                tel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
            );
        }
    }, [tel]);

    const handleChange = (event) => {
        const regex = /^[0-9-]{0,13}$/;
        if (regex.test(event.target.value)) {
            setTel(event.target.value);
        }
    };

    const handleSubmit = async (event) => {

        if (!name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }
        if (!nickname.trim()) {
            alert("닉네임을 입력해주세요");
            return;
        }
        if (!tel.trim()) {
            alert("전화번호를 입력해주세요.");
            return;
        }
        if (password !== passwordConfirm) {
            alert("비밀번호를 다시 확인해주세요.");
            return;
        }
        if (!isCheckEmail) {
            alert("이메일 중복 체크를 해주세요.");
            return;
        }
        const address = (zipcode || detailAddress || extraAddress) ?
            `${zipcode}, ${detailAddress}, ${extraAddress}` : null;

        const formData = {
            email: `${email}@${domain}`,
            password: password,
            name: name,
            nickname: nickname,
            tel: tel,
            address: address
        }
        console.log(formData);
        //백엔드랑 연동하기
        await axios
            .post("/api/user/saveUser", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("에러: ", error);
            })

    }

    const handleChangeName = (event) => {
        const regex = /^[가-힣]*$/;
        const inputValue = event.target.value;
        const cleanValue = inputValue.replace(/\s/g, "");

        if (regex.test(cleanValue)) {
            setName(cleanValue);
        }
    }

    const handleInputPwd = (event) => {
        setPassword(event.target.value);
        const regex = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,10}$/;

        if (!regex.test(event.target.value)) {
            setIsMessage("비밀번호는 8~10 자리의 영어, 숫자, 특수기호의 조합으로 이루어져야 합니다.");
        } else {
            setIsMessage("");
        }

    }

    const handleCheckEmail = async () => {
        console.log("이메일 확인")

        if (!email || !domain) {
            alert("이메일을 입력해주세요.");
            return;
        }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(`${email}@${domain}`)) {
            alert("이메일은 공백 제외, 영문자, 숫자, .(온점), _(언더바)만 기입 가능합니다.")
            return;
        }

        const formData = {
            email: `${email}@${domain}`
        }

        await axios
            .post("/api/user/checkEmail", formData)
            .then((response) => {
                const message = response.data;

                if (message === "이메일이 이미 존재합니다") {
                    alert(message);
                    setIsCheckEmail(false);
                } else {
                    alert(message);
                    setIsCheckEmail(true);
                }
            })
            .catch((error) => {
                console.error("에러: ", error);
                alert("이메일 확인 중 오류가 발생했습니다.");
                setIsCheckEmail(false);
            });
    }



    return (
        <>
            <h2>회원가입</h2>
            <div>
                <div>아이디</div>
                <WriteId
                    domain={domain}
                    inputEmail={setEmail}
                    inputDomain={setDomain}
                />
                <button
                    type="button"
                    onClick={handleCheckEmail}
                >
                    이메일 중복 확인
                </button>
            </div>

            <div>
                <div>비밀번호</div>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handleInputPwd}
                    placeholder="비밀번호를 입력하세요"
                />
                {isMessage && <p style={{ color: "red" }}>{isMessage}</p>}
            </div>

            <div>
                <div>비밀번호 확인</div>
                <input
                    id="passwordConfirm"
                    type="password"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                    placeholder="비밀번호를 확인하세요"
                />
            </div>

            <div>
                <div>이름</div>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="이름을 입력하세요"
                />
            </div>

            <div>
                <div>닉네임</div>
                <input
                    id="nickname"
                    type="text"
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                    placeholder="닉네임을 입력하세요"
                />
            </div>

            <div>
                <div>전화번호</div>
                <input
                    id="tel"
                    type="text"
                    value={tel}
                    onChange={handleChange}
                    placeholder="전화번호를 입력하세요"
                />
            </div>

            <div>
                <Address
                    inputZipCode={setZipCode}
                    inputDetailAddress={setDetailAddress}
                    inputExtraAddress={setExtraAddress}
                />
            </div>

            <div>
                <button type="button" onClick={handleSubmit}>회원가입 하기</button>
            </div>
        </>
    );
}

export default CreateAccount;

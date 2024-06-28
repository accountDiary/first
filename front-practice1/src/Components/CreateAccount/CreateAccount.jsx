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
    const [isCheckEmail, setIsCheckEmail] = useState("");
    const [checkMessage, setCheckMessage] = useState("");

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
        event.preventDefault();

        if (password !== passwordConfirm) {
            alert("비밀번호를 다시 확인해주세요.");
            return;
        }
        if (!isCheckEmail) {
            alert("이메일 중복 체크를 해주세요.");
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

    // 비밀번호 정규식: const regex = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    const handleCheckEmail = async () => {
        console.log("이메일 중복 확인")

        if (!email || !domain) {
            alert("이메일을 입력해주세요.");
            return;
        }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(`${email}@${domain}`)) {
            alert("이메일은 영문자, 숫자만 기입 가능합니다.")
            return;
        }

        const formData = {
            email: `${email}@${domain}`
        }
        await axios
            .post("/api/user/checkEmail", formData)
            .then((response) => {
                console.log(response.data);
                alert("사용 가능한 이메일입니다.");
                setIsCheckEmail(true);
            })
            .catch((error) => {
                console.error("에러: ", error);
                alert("중복된 이메일입니다.");
                setIsCheckEmail(false);
            })
    }



    return (
        <>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>아이디</div>
                    <WriteId
                        domain={domain}
                        inputEmail={setEmail}
                        inputDomain={setDomain}
                    />
                    <button type="button" onClick={handleCheckEmail}>이메일 중복 체크</button>
                </div>

                <div>
                    <div>비밀번호</div>
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="비밀번호를 입력하세요"
                    />
                </div>

                <div>
                    <div>비밀번호 확인</div>
                    <input
                        id="passwordConfirm"
                        type="password"
                        required
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
                        required
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
                        required
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
                        required
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
                    <button type="submit">회원가입 하기</button>
                </div>
            </form>
        </>
    );
}

export default CreateAccount;

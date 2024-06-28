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
                console.log(response.data)
            })
            .catch((error) => {
                console.error("에러: ", error )
            })

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>회원가입</h2>
                <div>
                    <div>아이디</div>
                    <WriteId
                        domain={domain}
                        inputEmail={setEmail}
                        inputDomain={setDomain}
                    />
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
                        onChange={(event) => setName(event.target.value)}
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

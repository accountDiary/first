import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function Address({ inputZipCode, inputDetailAddress, inputExtraAddress }) {
    const [isOpen, setIsOpen] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const completeHandler = (data) => {
        const { address, zonecode } = data;
        
        // 상태 업데이트
        setZipCode(zonecode);
        setDetailAddress(address);
        
        //부모 컴포넌트로 전달
        inputZipCode(zonecode);
        inputDetailAddress(address);
        
        setIsOpen(false);
    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "500px",
        padding: "7px",
        zIndex: 100,
        border: "1px solid black",
        backgroundColor: "white",
    };

    const closeHandler = (state) => {
        if (state === "FORCE_CLOSE") {
            setIsOpen(false);
        } else if (state === "COMPLETE_CLOSE") {
            setIsOpen(false);
        }
    };

    const zipcodeButton = () => {
        setIsOpen((prevOpneState) => !prevOpneState);
    };

    return (
        <>
            <div>주소</div>
            <div>우편번호</div>
            <input
                id="zipcode"
                type="number"
                required
                value={zipCode}
                disabled
            />
            <button type="button" onClick={zipcodeButton}>주소 찾기</button>
            {isOpen && (
                <div style={postCodeStyle}>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                    >
                        X
                    </button>
                    <DaumPostcode
                        onComplete={completeHandler}
                        onClose={closeHandler}
                    />
                </div>
            )}
            <div>기본주소</div>
            <input
                id="detailAddress"
                type="text"
                required
                value={detailAddress}
                disabled
            />
            <div>상세주소</div>
            <input
                id="extraAddress"
                type="text"
                onChange={(event) => inputExtraAddress(event.target.value)}
                placeholder="상세주소를 입력하세요(선택)"
            />
        </>
    )
}
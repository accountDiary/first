import React, { useState } from "react";

export default function Address({ inputZipCode, inputDetailAddress, inputExtraAddress }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function openAddrCode() {
        console.log("팝업 열림");
        setIsPopupOpen(true);
    }

    function closeAddrCode() {
        setIsPopupOpen(false);
    }

    return (
        <>
            <div>주소</div>
            <div>우편번호</div>
            <input
                id="zipcode"
                type="number"
                required
                onChange={(event) => inputZipCode(event.target.value)}
                disabled
            />
            <button type="button" onClick={openAddrCode}>우편번호 검색</button>
            <div>기본주소</div>
            <input
                id="detailAddress"
                type="text"
                required
                onChange={(event) => inputDetailAddress(event.target.value)}
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
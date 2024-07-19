import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Calendar from "../Container/Calendar";
import AccountInputTable from "./AccountInputTable";
import { getCategories, getPaymentList } from "../../Api/api.categories.js";
import { saveRecords } from "../../Api/api.record.js";
import "../../Css/AccountBook.css";

export default function AccountBook() {
    const [categories, setCategories] = useState([]);
    const [paymentCategories, setPaymentCategories] = useState([]);

    const [rows, setRows] = useState([
        { category: "", subCategory: "", paymentType: "", recordAmount: "", recordDetails: "", subCategories: [] }
    ]);

    const [searchParams] = useSearchParams();
    const date = searchParams.get("date");
    // const userNickname = searchParams.get("user");

    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(data => setCategories(data));
        getPaymentList().then(data => setPaymentCategories(data));

    }, [date]);

    const handleDateClick = (pickDate) => {
        const clickDate = pickDate.dateStr;
        navigate(`/writeAccountBook?date=${clickDate}`);
    };

    const handleSaveClick = () => {
        // .some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나 이상 통과하는지 테스트할 수 있음
        // 주어진 함수가 참이면 true, 거짓이면 false 반환
        const hasEmptyCategory = rows.some(row => !row.category.trim());
        const hasEmptySubCategory = rows.some(row => !row.subCategory.trim());
        const hasEmptyPaymentType = rows.some(row => !row.paymentType.trim());
        const hasEmptyAmount = rows.some(row => !row.recordAmount.trim());

        if(hasEmptyCategory) {
            alert("수입/지출 카테고리를 확인해주세요.");
            return;
        }
        if(hasEmptySubCategory) {
            alert("내역 카테고리를 확인해주세요.");
            return;
        }
        if(hasEmptyPaymentType) {
            alert("방식 카테고리를 확인해주세요.");
            return;
        }
        if(hasEmptyAmount) {
            alert("금액을 확인해주세요.");
            return;
        }
        
        const records = rows.map(row => ({
            ...row,
            record_date: date,
            user_id: 1,
            //user_nickname: userNickname,
            record_type: row.category,
            category_id: row.subCategory,
            payment_id: row.paymentType,
            record_amount: row.recordAmount,
            record_details: row.recordDetails
        }));

        saveRecords(records)
            .then(message => {
                alert(message);
                // setRows([
                //     { category: "", subCategory: "", paymentType: "", recordAmount: "", recordDetails: "", subCategories: [] }
                // ]);
                // navigate(`/writeAccountBook?date=${date}`);
            })
            .catch(error => { 
                console.error("에러: ", error);
                alert(error);
            });
    }

    return (
        <div className="container">
            <div className="calendar-container">
                <Calendar
                    onDateClick={handleDateClick}
                />
            </div>
            <div className="account-section">
                <div>
                    <h2>{date}</h2>
                </div>
                <div className="account-container">
                    <AccountInputTable
                        categories={categories}
                        paymentCategories={paymentCategories}
                        rows={rows}
                        setRows={setRows}
                    />
                </div>
                <div className="daily-account">
                    오늘의 소비 총평
                    <div>
                        <textarea id="todaysReview" placeholder="내용을 입력해주세요."></textarea>
                    </div>
                </div>
                <button type="button" onClick={handleSaveClick}>등록하기</button>
            </div>
        </div>
    );
}

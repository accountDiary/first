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
        const records = rows.map(row => ({
            ...row,
            record_date: date,
            user_id: 1,
            record_type: row.category,
            category_id: row.subCategory,
            payment_id: row.paymentType,
            record_amount: row.recordAmount,
            record_details: row.recordDetails
        }));

        saveRecords(records)
            .then(() => {
                alert("저장 성공");

                setRows([
                    { category: "", subCategory: "", paymentType: "", recordAmount: "", recordDetails: "", subCategories: [] }
                ]);

                navigate(`/writeAccountBook?date=${date}`);
            })
            .catch(error => {
                alert("Error: " + error.message);
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

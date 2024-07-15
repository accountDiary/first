import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Calendar from "../Container/Calendar";
import AccountInputTable from "./AccountInputTable";
import { getCategories, getPaymentList } from "../../Api/api.categories.js";
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
                <button type="button">등록하기</button>
            </div>
        </div>
    );
}

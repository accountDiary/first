import React, { useState, useEffect } from "react";
import Calendar from "../Container/Calendar";
import AccountInputTable from "./AccountInputTable";
import { getCategories } from "../../Api/api.categories.js";
import "../../Css/AccountBook.css";

export default function AccountBook() {
    const [categories, setCategories] = useState([]);
    const [spendingCategories, setSpendingCategories] = useState([]);
    const [incomeCategories, setIncomeCategories] = useState([]);

    useEffect(() => {
        getCategories().then(data => setCategories(data));
    }, []);


    return (
        <div className="container">
            <div className="calendar-container">
                <Calendar />
            </div>
            <div className="account-section">
                <div className="account-container">
                    <AccountInputTable
                        categories={categories}
                        spendingCategories={spendingCategories}
                        incomeCategories={incomeCategories}
                    />
                </div>
                <div className="daily-account">
                    오늘의 소비 총평
                    <div>
                        <textarea placeholder="내용을 입력해주세요."></textarea>
                    </div>
                </div>
                <button type="button">등록하기</button>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import Calendar from "../Container/Calendar";
import AccountInputTable from "./AccountInputTable";
import { getCategories, getIncomeCategories, getSpendingCategories } from "../../Api/api.categories";
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
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

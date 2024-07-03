import React from "react";
import Calendar from "../Container/Calendar";
import AccountTable from "./AccountTable";
import "../../Css/AccountBook.css";

export default function AccountBook() {
    return (
        <div className="container">
            <div className="calendar-container">
                <Calendar />
            </div>
            <div className="account-section">
                <div className="account-container">
                    <AccountTable />
                </div>
                <div className="daily-account">
                    오늘의 소비 총평
                </div>
            </div>
        </div>
    );
}

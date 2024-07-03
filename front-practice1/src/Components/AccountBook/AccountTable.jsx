import React from "react";
import SelectBox from "../SelectBox/SelectBox";

export default function AccountTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th><SelectBox /></th>
                    <th>내역</th>
                    <th>금액</th>
                    <th>비고</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><SelectBox /></td>
                    <td><SelectBox /></td>
                    <td>50,000</td>
                    <td>비고</td>
                </tr>
            </tbody>
        </table>
    );
}

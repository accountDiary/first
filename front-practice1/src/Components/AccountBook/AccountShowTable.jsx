import React, { useEffect } from "react";
import { loadRecords } from "../../Api/api.record";

export default function AccountShowTable({ records, setRecords, recordDate }) {
    useEffect(() => {
        loadRecords(recordDate).then((data) => setRecords(data));
    }, [recordDate, setRecords]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "20%" }}>수입 / 지출</th>
                        <th style={{ width: "15%" }}>내역</th>
                        <th style={{ width: "15%" }}>방식</th>
                        <th style={{ width: "20%" }}>금액</th>
                        <th style={{ width: "30%" }}>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.record_id}>
                            <td>{record.record_category_type}</td>
                            <td>{record.category_name}</td>
                            <td>{record.payment_type}</td>
                            <td>{record.record_amount}</td>
                            <td>{record.record_details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

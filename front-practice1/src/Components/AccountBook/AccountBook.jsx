import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Calendar from "../Container/Calendar";
import AccountInputTable from "./AccountInputTable";
import { getCategories, getPaymentList } from "../../Api/api.categories.js";
import { saveRecords, recordCntDate, loadRecords } from "../../Api/api.record.js";
import "../../Css/AccountBook.css";
import AccountShowTable from "./AccountShowTable.jsx";

export default function AccountBook() {
  const [categories, setCategories] = useState([]);
  const [paymentCategories, setPaymentCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [rows, setRows] = useState([
    {
      category: "",
      subCategory: "",
      paymentType: "",
      recordAmount: "",
      recordDetails: "",
      subCategories: [],
    },
  ]);

  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  const [recordCnt, setRecordCnt] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
    getPaymentList().then((data) => setPaymentCategories(data));
  }, []);

  useEffect(() => {
    recordCntDate(date).then((data) => {
      setRecordCnt(data);
      if (data > 0) {
        loadRecords(date).then((data) => {
          const mappedRecords = data.map((record) => ({
            category: record.record_category_type,
            subCategory: record.category_id,
            paymentType: record.payment_id,
            recordAmount: record.record_amount,
            recordDetails: record.record_details,
            subCategories: [],
          }));
          setRecords(data);
          setRows(mappedRecords);
        });
      } else {
        setRows([{
          category: "",
          subCategory: "",
          paymentType: "",
          recordAmount: "",
          recordDetails: "",
          subCategories: [],
        }]);
      }
    });
  }, [date]);

  const handleDateClick = (pickDate) => {
    const clickDate = pickDate.dateStr;
    navigate(`/accountBook?date=${clickDate}`);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const hasEmptyCategory = rows.some((row) => !String(row.category).trim());
    const hasEmptySubCategory = rows.some((row) => !String(row.subCategory).trim());
    const hasEmptyPaymentType = rows.some((row) => !String(row.paymentType).trim());
    const hasEmptyAmount = rows.some((row) => !String(row.recordAmount).trim());

    if (hasEmptyCategory) {
      alert("수입/지출 카테고리를 확인해주세요.");
      return;
    }
    if (hasEmptySubCategory) {
      alert("내역 카테고리를 확인해주세요.");
      return;
    }
    if (hasEmptyPaymentType) {
      alert("방식 카테고리를 확인해주세요.");
      return;
    }
    if (hasEmptyAmount) {
      alert("금액을 확인해주세요.");
      return;
    }

    const records = rows.map((row) => ({
      ...row,
      record_date: date,
      user_id: 1,
      record_type: row.category,
      category_id: row.subCategory,
      payment_id: row.paymentType,
      record_amount: row.recordAmount,
      record_details: row.recordDetails,
    }));

    saveRecords(records)
      .then((message) => {
        alert(message);
        setRecords(records);
      })
      .catch((error) => {
        console.error("에러: ", error);
        alert(error);
      });
  };

  const handleModifyClick = () => {
    setRows(records.map(record => ({
      category: record.record_category_type,
      subCategory: record.category_id,
      paymentType: record.payment_id,
      recordAmount: record.record_amount,
      recordDetails: record.record_details,
      subCategories: [],  // 필요 시 API 호출로 로드
    })));
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setIsEditing(false);
    // 추가적인 수정 로직이 필요한 경우 여기에 추가
  };

  return (
    <div className="container">
      <div className="calendar-container">
        <Calendar onDateClick={handleDateClick} />
      </div>
      <div className="account-section">
        <div>
          <h2>{date}</h2>
        </div>
        {recordCnt === 0 || isEditing ? (
          <>
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
                <textarea
                  id="todaysReview"
                  placeholder="내용을 입력해주세요."
                  disabled={!isEditing}
                ></textarea>
              </div>
            </div>
            <button type="button" onClick={isEditing ? handleUpdateClick : handleSaveClick}>
              {isEditing ? "저장하기" : "등록하기"}
            </button>
          </>
        ) : (
          <>
            <div className="account-container">
              <AccountShowTable
                recordDate={date}
                records={records}
                setRecords={setRecords}
              />
            </div>
            <div className="daily-account">
              오늘의 소비 총평
              <div>
                <textarea id="todaysReview" disabled></textarea>
              </div>
            </div>
            <button type="button" onClick={handleModifyClick}>
              수정하기
            </button>
          </>
        )}
      </div>
    </div>
  );
}

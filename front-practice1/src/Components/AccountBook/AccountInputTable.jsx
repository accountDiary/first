import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

import SelectBox from "../SelectBox/SelectBox";
import { getIncomeCategories, getSpendingCategories } from "../../Api/api.categories.js";

export default function AccountTable({ categories, paymentCategories, rows, setRows, recordAmount, setRecordAmount }) {

    const handleCategoryChange = (event, index) => {
        //선택한 카테고리 값 가져옴
        const selected = event.target.value;
        //현재 행 상태를 복사해서 새로운 배열 만듦
        const newRows = [...rows];
        //새로운 행 배열의 index위치에 있는 객체의 카테고리 속성을 selected 값으로 설정
        newRows[index].category = selected;

        if (selected === "1") {
            getSpendingCategories()
                .then(data => {
                    //해당 행의 서브 카테고리 업데이트
                    newRows[index].subCategories = data;
                    //업데이트된 행의 상태 결정
                    setRows(newRows);
                });
        } else if (selected === "2") {
            getIncomeCategories()
                .then(data => {
                    newRows[index].subCategories = data;
                    setRows(newRows);
                });
        } else {
            newRows[index].subCategories = [];
            setRows(newRows);
        }
    }

    const handleSubCategoryChange = (event, index) => {
        const subSelected = event.target.value;
        const newRows = [...rows];

        //인덱스를 사용하여 특정 행의 서브 카테고리를 업데이트
        newRows[index].subCategory = subSelected;
        setRows(newRows);

        console.log("서브 카테고리:", subSelected);
    }

    const handlePaymentTypeChange = (event, index) => {
        const paymentSelected = event.target.value;
        const newRows = [...rows];

        let recordAmount = event.target.value;
        recordAmount = Number(recordAmount.replaceAll(",", ""));
        if (isNaN(recordAmount)) {
            setRecordAmount(0);
        } else {
            setRecordAmount(recordAmount.toLocaleString("ko-KR"));
        }

        newRows[index].paymentType = paymentSelected;

    }

    const handleAmountInputChange = (event, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = event.target.value;
        setRows(newRows);
    }

    const handleDetailsInputChange = (event, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = event.target.value;
        setRows(newRows);
    }

    //행 추가
    const addRow = () => {
        //새로운 행 추가해서 행 상태 업데이트
        setRows([...rows, { category: "", subCategory: "", paymentType: "", recordAmount: "", recordDetails: "", subCategories: [] }]);
    }

    //행 삭제
    const deleteRow = (index) => {
        //_(언더바): 해당 변수 값이 사용되지 않음을 나타낼 때 js에서 관습적으로 사용되는 변수명
        //i: 배열의 인덱스
        //인덱스 i가 해당 함수에 전달된 index와 같지 않은 요소들만 포함하는 새 배열 반환
        setRows(rows.filter((_, i) => i !== index));
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>수입 / 지출</th>
                        <th>내역</th>
                        <th>방식</th>
                        <th>금액</th>
                        <th>비고</th>
                        <th>
                            <button
                                type="button"
                                onClick={addRow}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <SelectBox
                                    id={`category${index}`}
                                    name={`category${index}`}
                                    options={categories}
                                    onChange={(event) => handleCategoryChange(event, index)}
                                />
                            </td>
                            <td>
                                <SelectBox
                                    id={`subCategory${index}`}
                                    name={`subCategory${index}`}
                                    options={row.subCategories}
                                    onChange={(event) => handleSubCategoryChange(event, index)}
                                />
                            </td>
                            <td>
                                <SelectBox
                                    id={`paymentType${index}`}
                                    name={`paymentType${index}`}
                                    options={paymentCategories}
                                    onChange={(event) => handlePaymentTypeChange(event, index)}
                                />
                            </td>
                            <td>
                                <input
                                    id={`recordAmount${index}`}
                                    name={`recordAmount${index}`}
                                    type="number"
                                    value={row.recordAmount}
                                    onChange={(event) => handleAmountInputChange(event, index, "recordAmount")}
                                />
                            </td>
                            <td>
                                <input
                                    id={`recordDetails${index}`}
                                    name={`recordDetails${index}`}
                                    type="text"
                                    value={row.recordDetails}
                                    onChange={(event) => handleDetailsInputChange(event, index, "recordDetails")}
                                />
                            </td>
                            <td>
                                {rows.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => deleteRow(index)}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

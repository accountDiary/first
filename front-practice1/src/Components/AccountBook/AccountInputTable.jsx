import React, { useState, useEffect } from "react";
import SelectBox from "../SelectBox/SelectBox";
import { getIncomeCategories, getSpendingCategories } from "../../Api/api.categories";

export default function AccountTable({ categories, spendingCategories, incomeCategories }) {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);

    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategory(selected);

        if (selected === "1") {
            getSpendingCategories().then(data => setSubCategories(data));
        } else if (selected === "2") {
            getIncomeCategories().then(data => setSubCategories(data));
        } else {
            setSubCategories([]);
        }
    }

    const handleSubCategoryChange = (event) => {
        const subSelected = event.target.value;
        setSelectedSubCategory(subSelected); // 변수명 변경

        console.log("서브 카테고리:", subSelected);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>수입 / 지출</th>
                        <th>내역</th>
                        <th>금액</th>
                        <th>비고</th>
                        <th><button>추가</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <SelectBox
                                options={categories}
                                onChange={handleCategoryChange}
                            />
                        </td>
                        <td>
                            <SelectBox
                                options={subCategories}
                                onChange={handleSubCategoryChange}
                            />
                        </td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><button>삭제</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

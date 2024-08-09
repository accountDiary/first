import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import SelectBox from "../SelectBox/SelectBox";
import {
    getIncomeCategories,
    getSpendingCategories,
} from "../../Api/api.categories.js";

export default function AccountInputTable({
    categories,
    paymentCategories,
    rows,
    setRows,
}) {
    useEffect(() => {
        if (rows.length === 0) {
            setRows([
                {
                    category: "",
                    subCategory: "",
                    paymentType: "",
                    recordAmount: "",
                    recordDetails: "",
                    subCategories: [],
                },
            ]);
        }
    }, [rows, setRows]);

    const handleCategoryChange = (event, index) => {
        const selected = event.target.value;
        const newRows = [...rows];
        newRows[index].category = selected;

        if (selected === "1") {
            getSpendingCategories().then((data) => {
                newRows[index].subCategories = data;
                setRows(newRows);
            });
        } else if (selected === "2") {
            getIncomeCategories().then((data) => {
                newRows[index].subCategories = data;
                setRows(newRows);
            });
        } else {
            newRows[index].subCategories = [];
            setRows(newRows);
        }
    };

    const handleSubCategoryChange = (event, index) => {
        const subSelected = event.target.value;
        const newRows = [...rows];
        newRows[index].subCategory = subSelected;
        setRows(newRows);
    };

    const handlePaymentTypeChange = (event, index) => {
        const paymentSelected = event.target.value;
        const newRows = [...rows];
        newRows[index].paymentType = paymentSelected;
        setRows(newRows);
    };

    const handleAmountInputChange = (event, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = event.target.value;
        setRows(newRows);
    };

    const handleDetailsInputChange = (event, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = event.target.value;
        setRows(newRows);
    };

    const addRow = () => {
        setRows([
            ...rows,
            {
                category: "",
                subCategory: "",
                paymentType: "",
                recordAmount: "",
                recordDetails: "",
                subCategories: [],
            },
        ]);
    };

    const deleteRow = (index) => {
        if (rows.length > 1) {
            setRows(rows.filter((_, i) => i !== index));
        }
    };

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
                            <button type="button" onClick={addRow}>
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
                                    value={row.category}
                                    onChange={(event) =>
                                        handleCategoryChange(event, index)
                                    }
                                />
                            </td>
                            <td>
                                <SelectBox
                                    id={`subCategory${index}`}
                                    name={`subCategory${index}`}
                                    options={row.subCategories}
                                    value={row.subCategory}
                                    onChange={(event) =>
                                        handleSubCategoryChange(event, index)
                                    }
                                />
                            </td>
                            <td>
                                <SelectBox
                                    id={`paymentType${index}`}
                                    name={`paymentType${index}`}
                                    options={paymentCategories}
                                    value={row.paymentType}
                                    onChange={(event) =>
                                        handlePaymentTypeChange(event, index)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    id={`recordAmount${index}`}
                                    name={`recordAmount${index}`}
                                    type="number"
                                    value={row.recordAmount}
                                    onChange={(event) =>
                                        handleAmountInputChange(
                                            event,
                                            index,
                                            "recordAmount"
                                        )
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    id={`recordDetails${index}`}
                                    name={`recordDetails${index}`}
                                    type="text"
                                    value={row.recordDetails}
                                    onChange={(event) =>
                                        handleDetailsInputChange(
                                            event,
                                            index,
                                            "recordDetails"
                                        )
                                    }
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

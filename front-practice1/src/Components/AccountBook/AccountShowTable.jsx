import React from "react";

export default function AccountShowTable({ recordDate }) {

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
                            .
                            {/* <button
                                type="button"
                                onClick={addRow}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button> */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {rows.map((row, index) => ( */}
                        <tr>
                            <td>
                                하이?
                                {/* <SelectBox
                                    id={`category${index}`}
                                    name={`category${index}`}
                                    options={categories}
                                    onChange={(event) => handleCategoryChange(event, index)}
                                /> */}
                            </td>
                            <td>
                                {/* <SelectBox
                                    id={`subCategory${index}`}
                                    name={`subCategory${index}`}
                                    options={row.subCategories}
                                    onChange={(event) => handleSubCategoryChange(event, index)}
                                /> */}
                            </td>
                            <td>
                                {/* <SelectBox
                                    id={`paymentType${index}`}
                                    name={`paymentType${index}`}
                                    options={paymentCategories}
                                    onChange={(event) => handlePaymentTypeChange(event, index)}
                                /> */}
                            </td>
                            <td>
                                {/* <input
                                    id={`recordAmount${index}`}
                                    name={`recordAmount${index}`}
                                    type="number"
                                    value={row.recordAmount}
                                    onChange={(event) => handleAmountInputChange(event, index, "recordAmount")}
                                /> */}
                            </td>
                            <td>
                                {/* <input
                                    id={`recordDetails${index}`}
                                    name={`recordDetails${index}`}
                                    type="text"
                                    value={row.recordDetails}
                                    onChange={(event) => handleDetailsInputChange(event, index, "recordDetails")}
                                /> */}
                            </td>
                            <td>
                                {/* {rows.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => deleteRow(index)}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                )} */}
                            </td>
                        </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </>
    );
}

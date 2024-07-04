import React from "react"

export default function SelectBox({ options, onChange }) {
    const handleOnChange = (event) => {
        if (onChange) {
            onChange(event);
        }
    }

    return (
        <>
            <select onChange={onChange}>
                <option value="">선택</option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}
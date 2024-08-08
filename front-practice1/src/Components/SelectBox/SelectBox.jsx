import React from "react"

export default function SelectBox({ id, name, options, value, onChange }) {

    return (
        <>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">선택</option>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}
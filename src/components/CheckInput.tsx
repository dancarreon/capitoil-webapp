import * as React from "react";

export const CheckInput = ({label, name, checked, onChange}: {
    label: string,
    name: string,
    checked?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className='text-right pr-4 float-right'>
            <label className='text-white font-bold text-md mr-2 align-[-2.3px]'>{label}</label>
            <input type="checkbox"
                   checked={checked}
                   name={name}
                   className='checkbox border-white border-2 checkbox-lg checked:text-[#EC3113]'
                   onChange={onChange}
            />
        </div>
    )
}

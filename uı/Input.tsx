'use client'
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
    label: string,
    name: string,
    type?: HTMLInputTypeAttribute | undefined,
    required?: boolean | undefined,
    disabled?: boolean,
    placeholder?: string,
    maxLenght?: number
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    value?: string | ReadonlyArray<string> | number | undefined | null,
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    type,
    required,
    disabled,
    onChange,
    placeholder,
}) => {
    return (
        <div>
            <label 
            htmlFor={name}
            className='
                block
                text-sm
                font-medium
                leading-6
                text-gray-400
            '
            >
                {label}
            </label>
            <div className="mt-1">
                <input 
                    name={name}
                    type={type}
                    required={required}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="
                        block 
                        w-full 
                        appearance-none 
                        rounded-md border 
                        border-gray-300 
                        px-3 py-2 
                        shadow-sm 
                        placeholder:text-gray-400 
                        focus:border-purple-500 
                        focus:outline-none 
                        focus:ring-purple-500 
                        sm:text-sm"
                />
            </div>
        </div>
    )
}

export default Input
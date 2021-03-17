import React from 'react';
import s from './Input.module.css';

type InputProps = {
    placeholder?: string,
    onChange?: (value: string) => void;
}

const Input = ({placeholder, onChange} : InputProps) => {

    const handleOnChange = (e: any) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <label>
            <input
                className={s.input}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </label>
    )
}

export default Input;
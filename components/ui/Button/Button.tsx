import React from 'react';
import s from './Button.module.css';

type ButtonProps = {
    text: string,
    disabled: boolean,
    onClick?: () => void,
}

const Button = ({text, disabled, onClick} : ButtonProps) => {
    return (
        <>
            <button
                className={s.button}
                disabled={disabled}
                >
                    {text}
            </button>
        </>
    )
}

export default Button;
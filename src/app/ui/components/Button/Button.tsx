import React from 'react';
import s from './Button.module.css';

type ButtonProps = {
    disabled: boolean,
    onClick?: () => void,
    children: string,
}

const Button = ({disabled, onClick, children} : ButtonProps) => {
    return (
        <>
            <button
                className={s.button}
                disabled={disabled}
                >
                    {children}
            </button>
        </>
    )
}

export default Button;
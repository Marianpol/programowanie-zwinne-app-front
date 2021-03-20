import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import s from './Login.module.css';

const Login = () => {

    return (
        <div className={s.login_box}>
            <div className={s.login_wrapper}>
                <h2 className={s.login_wrapper__header}>Logowanie</h2>
                <div className={s.login_wrapper__inputs}>
                    <Input placeholder="Email"/>
                    <Input placeholder="Hasło"/>
                </div>
                <Button disabled={false}>Zaloguj się</Button>
                <Button disabled={false}>Zarejestruj się</Button>
            </div>
        </div>
    )
}

export default Login;
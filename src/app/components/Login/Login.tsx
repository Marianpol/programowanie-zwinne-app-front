import ILogin from "app/types/Login";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Router from "next/router";
import React, { ChangeEvent, useState } from "react";
import ErrorTag from "../ErrorTag";
import Form from "../Form";
import s from "./Login.module.css";

const Login = () => {
  const [values, setValues] = useState<ILogin>({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const { username, password } = values;

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({
      username: !username.length,
      password: !password.length,
    });

    if (username.length && password.length) {
      console.log(values);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => () => {
    const name = event.target.name;
    setError({ ...error, [name]: !values[name].length });
  };

  return (
    <div className={s.root}>
      <Card className={s.card}>
        <div className={s.header}>
          <Text size="very-large" weight="semi-bold">
            Logowanie
          </Text>
        </div>
        <Form onSubmit={handleSubmit} className={s.content}>
          <Input
            name="username"
            placeholder="Login"
            label="Login"
            value={username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.username}
            className={s.input}
            fullWidth
            required
          />
          {error.username ? <ErrorTag /> : null}

          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            label="Hasło"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.password}
            className={s.input}
            fullWidth
            required
          />
          {error.password ? <ErrorTag /> : null}

          <div className={s.footer}>
            <Button className={s.button} textColor="white" type="submit">
              Zaloguj się
            </Button>
            <Button className={s.button} textColor="white" onClick={() => Router.push("/register")}>
              Rejestracja
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Router from "next/router";
import React, { useState } from "react";
import ErrorTag from "../ErrorTag";
import Form from "../Form";
import s from "./Login.module.css";

const Login = () => {
  const [values, setValues] = useState<any>({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const { username, password } = values;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setError({
      username: !username.length,
      password: !password.length,
    });

    if (username.length && password.length) {
      console.log(values);
    }
  };

  const handleChange = (event: any, type: string) =>
    setValues({ ...values, [type]: event.target.value });

  const handleBlur = (type: string) => () => setError({ ...error, [type]: !values[type].length });

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
            onChange={(event) => handleChange(event, "username")}
            onBlur={handleBlur("username")}
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
            onChange={(event) => handleChange(event, "password")}
            onBlur={handleBlur("password")}
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

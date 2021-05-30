import IRegister from "app/types/IRegister";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Router from "next/router";
import React, { ChangeEvent, useState } from "react";
import ErrorTag from "../ErrorTag";
import Form from "../Form";
import s from "./Register.module.css";

const Register = () => {
  const [values, setValues] = useState<IRegister>({
    name: "",
    surname: "",
    password: "",
    repassword: "",
  });

  const [error, setError] = useState({
    name: false,
    surname: false,
    password: false,
    repassword: false,
  });

  const { name, surname, password, repassword } = values;

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({
      name: !name.length,
      surname: !surname.length,
      password: !password.length,
      repassword: !repassword.length,
    });

    if (name.length && surname.length && password.length) {
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
            Rejestracja
          </Text>
        </div>
        <Form onSubmit={handleSubmit} className={s.content}>
          <Input
            name="name"
            placeholder="Imię"
            label="Imię"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.name}
            className={s.input}
            fullWidth
            required
          />
          {error.name ? <ErrorTag /> : null}

          <Input
            name="surname"
            placeholder="Nazwisko"
            label="Nazwisko"
            value={surname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.surname}
            className={s.input}
            fullWidth
            required
          />
          {error.surname ? <ErrorTag /> : null}

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

          <Input
            type="password"
            name="repassword"
            placeholder="Powtórz hasło"
            label="Powtórz hasło"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.repassword}
            className={s.input}
            fullWidth
            required
          />
          {error.repassword ? <ErrorTag /> : null}

          <div className={s.footer}>
            <Button className={s.button} textColor="white" type="submit">
              Zarejestruj się
            </Button>
            <Button className={s.button} textColor="white" onClick={() => Router.push("/login")}>
              Logowanie
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;

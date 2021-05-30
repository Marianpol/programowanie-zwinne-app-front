import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Checkbox from "app/ui/components/Checkbox";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Student from "modules/student/types/Student";
import React, { ChangeEvent, useState } from "react";
import s from "./StudentForm.module.css";

export interface StudentFormProps {
  initialValues: Student;
  isEdit?: boolean;
}

const StudentForm = ({ initialValues, isEdit }: StudentFormProps) => {
  const [values, setValues] = useState<Student>(initialValues);

  const [error, setError] = useState({
    name: false,
    indexNumber: false,
    email: false,
  });

  const { name, indexNumber, email, fullTimeStudies } = values;

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({
      name: !name.length,
      indexNumber: !indexNumber.length,
      email: !email.length,
    });

    if (name.length && indexNumber.length && email.length) {
      console.log(values);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setError({ ...error, [name]: !values[name].length });
  };

  return (
    <Card>
      <div className={s.header}>
        <Text weight="medium" size="large">
          {!isEdit ? "Nowy student" : "Edycja studenta"}
        </Text>
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Imię i nazwisko"
          label="Imię i nazwisko"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.input}
          error={error.name}
          fullWidth
          required
        />
        {error.name ? <ErrorTag /> : null}

        <Input
          name="indexNumber"
          placeholder="Numer indeksu"
          label="Numer indeksu"
          value={indexNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.input}
          error={error.indexNumber}
          fullWidth
          required
        />
        {error.indexNumber ? <ErrorTag /> : null}

        <Input
          name="email"
          placeholder="E-mail"
          label="E-mail"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.input}
          error={error.email}
          fullWidth
          required
        />
        {error.email ? <ErrorTag /> : null}

        <Checkbox
          name="fullTimeStudies"
          checked={fullTimeStudies}
          onChange={(event) => setValues({ ...values, fullTimeStudies: event.target.checked })}
          label="Studia stacjonarne"
          className={s.input}
        />

        <div className={s.footer}>
          <Button textColor="white" className={s.button} type="submit">
            {!isEdit ? "Dodaj" : "Zapisz"}
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default StudentForm;

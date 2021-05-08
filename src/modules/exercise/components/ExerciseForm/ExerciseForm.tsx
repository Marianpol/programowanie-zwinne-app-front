import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Textarea from "app/ui/components/Textarea";
import React, { useState } from "react";
import s from "./ExerciseForm.module.css";

const ExerciseForm = () => {
  const [values, setValues] = useState<any>({
    title: "",
    description: "",
  });

  const [error, setError] = useState({
    title: false,
    description: false,
  });

  const { title, description } = values;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setError({
      title: !title.length,
      description: !description.length,
    });

    if (title.length && description.length) {
      console.log(values);
    }
  };

  const handleChange = (event: any, type: string) =>
    setValues({ ...values, [type]: event.target.value });

  const handleBlur = (type: string) => () => setError({ ...error, [type]: !values[type].length });

  return (
    <Card>
      <div className={s.header}>
        <Text weight="medium" size="large">
          Nowe zadanie
        </Text>
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Nazwa zadania"
          label="Nazwa zadania"
          value={title}
          onChange={(event) => handleChange(event, "title")}
          onBlur={handleBlur("title")}
          className={s.input}
          error={error.title}
          fullWidth
          required
        />
        {error.title ? <ErrorTag /> : null}

        <Textarea
          multiline
          rows={6}
          name="description"
          placeholder="Opis zadania"
          label="Opis zadania"
          value={description}
          onChange={(event) => handleChange(event, "description")}
          onBlur={handleBlur("description")}
          className={s.input}
          error={error.description}
          fullWidth
          required
        />

        {error.description ? <ErrorTag /> : null}

        <div className={s.footer}>
          <Button textColor="white" className={s.button} type="submit">
            Dodaj
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ExerciseForm;

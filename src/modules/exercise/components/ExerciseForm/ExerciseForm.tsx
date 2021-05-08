import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Textarea from "app/ui/components/Textarea";
import Exercise from "modules/exercise/types/Exercise";
import React, { useState } from "react";
import s from "./ExerciseForm.module.css";

export interface ExerciseFormProps {
  initialValues?: Exercise;
  isEdit?: boolean;
}

const ExerciseForm = ({ initialValues, isEdit }: ExerciseFormProps) => {
  const [values, setValues] = useState<Pick<Exercise, "name" | "description">>({
    name: "",
    description: "",
    ...initialValues,
  });

  const [error, setError] = useState({
    name: false,
    description: false,
  });

  const { name, description } = values;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setError({
      name: !name.length,
      description: !description.length,
    });

    if (name.length && description.length) {
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
          {!isEdit ? "Nowe zadanie" : "Edycja zadania"}
        </Text>
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nazwa zadania"
          label="Nazwa zadania"
          value={name}
          onChange={(event) => handleChange(event, "name")}
          onBlur={handleBlur("name")}
          className={s.input}
          error={error.name}
          fullWidth
          required
        />
        {error.name ? <ErrorTag /> : null}

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
            {!isEdit ? "Dodaj" : "Zapisz"}
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ExerciseForm;

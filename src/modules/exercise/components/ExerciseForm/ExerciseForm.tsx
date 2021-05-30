import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Input from "app/ui/components/Input";
import Text from "app/ui/components/Text";
import Textarea from "app/ui/components/Textarea";
import Exercise from "modules/exercise/types/Exercise";
import React, { ChangeEvent, useState } from "react";
import s from "./ExerciseForm.module.css";

export interface ExerciseFormProps {
  initialValues: Exercise;
  onSubmit: (values: Exercise) => void;
  isEdit?: boolean;
}

const ExerciseForm = ({ initialValues, onSubmit, isEdit }: ExerciseFormProps) => {
  const [values, setValues] = useState<Exercise>(initialValues);

  const [error, setError] = useState({
    name: false,
    description: false,
  });

  const { name, description } = values;

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({
      name: !name.length,
      description: !description.length,
    });

    if (name.length && description.length) {
      onSubmit && onSubmit(values);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => () => {
    const name = event.target.name;
    setError({ ...error, [name]: !values[name as keyof Exercise].length });
  };

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
          onChange={handleChange}
          onBlur={handleBlur}
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
          onChange={handleChange}
          onBlur={handleBlur}
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

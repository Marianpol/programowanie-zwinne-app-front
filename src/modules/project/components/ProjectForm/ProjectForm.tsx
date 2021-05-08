import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Checkbox from "app/ui/components/Checkbox";
import Input from "app/ui/components/Input";
import Select from "app/ui/components/Select";
import Text from "app/ui/components/Text";
import React, { useState } from "react";
import mock from "../../../../../mock.json";
import s from "./ProjectForm.module.css";

const ProjectForm = () => {
  const [values, setValues] = useState<any>({
    title: "",
    subject: "",
    isActive: true,
    exercises: [],
    users: [],
    files: [],
  });

  const [error, setError] = useState({
    title: false,
    subject: false,
    exercises: false,
    users: false,
  });

  const { title, subject, isActive, exercises, users, files } = values;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setError({
      title: !title.length,
      subject: !subject.length,
      exercises: !exercises.length,
      users: !users.length,
    });

    if (title.length && subject.length && exercises.length && users.length) {
      console.log(values);
    }
  };

  const handleBlur = (type: string) => () => setError({ ...error, [type]: !values[type].length });

  const handleChange = (event: any, type: string) =>
    setValues({ ...values, [type]: event.target.value });

  const handleChangeSelect = (event: any, type: string) => {
    if (!values[type].includes(event.target.value)) {
      setValues({ ...values, [type]: [...values[type], event.target.value] });
    } else {
      setValues({
        ...values,
        [type]: values[type].filter((exercise: string) => exercise !== event.target.value),
      });
    }
  };

  return (
    <Card>
      <div className={s.header}>
        <Text weight="medium" size="large">
          Nowy projekt
        </Text>
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nazwa projektu"
          label="Nazwa projektu"
          name="title"
          value={title}
          onChange={(event) => handleChange(event, "title")}
          onBlur={handleBlur("title")}
          className={s.input}
          error={error.title}
          fullWidth
          required
        />
        {error.title ? <ErrorTag /> : null}

        <Select
          label="Przedmiot"
          placeholder="Przedmiot"
          name="subject"
          value={subject}
          onChange={(event) => handleChange(event, "subject")}
          onBlur={handleBlur("subject")}
          className={s.input}
          error={error.subject}
          fullWidth
          required
        >
          <option value="">Wybierz przedmiot</option>
          {mock.subjects.map(({ id, name }: any) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        {error.subject ? <ErrorTag /> : null}

        <div className={s.selectorsWrapper}>
          <div className={s.selectWrapper}>
            <Select
              multiple
              label="Zadania"
              name="exercises"
              value={exercises}
              onChange={(event) => handleChangeSelect(event, "exercises")}
              onBlur={handleBlur("exercises")}
              className={s.input}
              error={error.exercises}
              fullWidth
              required
            >
              {mock.exercises.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
            {error.exercises ? <ErrorTag /> : null}
          </div>

          <div className={s.selectWrapper}>
            <Select
              multiple
              label="Uczestnicy"
              placeholder="Uczestnicy"
              name="users"
              value={users}
              onChange={(event) => handleChangeSelect(event, "users")}
              onBlur={handleBlur("users")}
              className={s.input}
              error={error.users}
              fullWidth
              required
            >
              {mock.students.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
            {error.users ? <ErrorTag /> : null}
          </div>

          <div className={s.selectWrapper}>
            {/* <FileUploader
              name="files"
              value={files}
              onChange={(event) => setValues({ ...values, files: [...files, event.target.value] })}
            /> */}
          </div>
        </div>

        <Checkbox
          name="isActive"
          checked={isActive}
          onChange={(event) => setValues({ ...values, isActive: event.target.checked })}
          label="Czy projekt jest aktywny?"
        />

        <div className={s.footer}>
          <Button textColor="white" className={s.button} type="submit">
            Dodaj
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ProjectForm;

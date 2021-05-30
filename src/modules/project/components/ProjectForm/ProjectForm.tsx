import ErrorTag from "app/components/ErrorTag";
import Form from "app/components/Form";
import Button from "app/ui/components/Button";
import Card from "app/ui/components/Card";
import Checkbox from "app/ui/components/Checkbox";
import Input from "app/ui/components/Input";
import Select from "app/ui/components/Select";
import Text from "app/ui/components/Text";
import Project from "modules/project/types/Project";
import React, { ChangeEvent, useState } from "react";
import useSWR from "swr";
import mock from "../../../../../mock.json";
import s from "./ProjectForm.module.css";

export interface ProjectFormProps {
  initialValues: Project;
  onSubmit: (data: Project) => void;
  isEdit?: boolean;
}

const ProjectForm = ({ initialValues, isEdit, onSubmit }: ProjectFormProps) => {
  const [values, setValues] = useState<Project>(initialValues);

  const [error, setError] = useState({
    name: false,
    subject: false,
    exercises: false,
    users: false,
  });

  const { name, subject, status, exercises, users } = values;

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError({
      name: !name.length,
      subject: !subject.length,
      exercises: !exercises.length,
      users: !users.length,
    });

    if (name.length && subject.length && exercises.length && users.length) {
      onSubmit && onSubmit(values);
    }
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => () => {
    const name = event.target.name;
    setError({ ...error, [name]: !values[type].length });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name;
    if (!values[name].includes(event.target.value)) {
      setValues({ ...values, [name]: [...values[name], event.target.value] });
    } else {
      setValues({
        ...values,
        [name]: values[name].filter((exercise: string) => exercise !== event.target.value),
      });
    }
  };

  const { data: subjects = [] } = useSWR("http://localhost:8080/api/subject");

  return (
    <Card>
      <div className={s.header}>
        <Text weight="medium" size="large">
          {!isEdit ? "Nowy projekt" : "Edycja projektu"}
        </Text>
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nazwa projektu"
          label="Nazwa projektu"
          name="name"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.input}
          error={error.name}
          fullWidth
          required
        />
        {error.name ? <ErrorTag /> : null}

        <Select
          label="Przedmiot"
          placeholder="Przedmiot"
          name="subject"
          value={subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={s.input}
          error={error.subject}
          fullWidth
          required
        >
          <option value="">Wybierz przedmiot</option>
          {subjects.map(({ id, name }: { id: string; name: string }) => (
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
              onChange={handleChangeSelect}
              onBlur={handleBlur}
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
              onChange={handleChangeSelect}
              onBlur={handleBlur}
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
              onChange={setValues({ ...values, files: [...files, event.target.value] })}
            /> */}
          </div>
        </div>

        <Checkbox
          name="status"
          checked={status}
          onChange={(event) => setValues({ ...values, status: event.target.checked })}
          label="Czy projekt jest aktywny?"
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

export default ProjectForm;

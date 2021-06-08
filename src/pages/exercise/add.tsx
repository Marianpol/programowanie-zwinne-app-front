import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import axios from "axios";
import ExerciseForm from "modules/exercise/components/ExerciseForm";
import Exercise from "modules/exercise/types/Exercise";
import Router from "next/router";
import React from "react";
import { toast } from "react-toastify";

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Nowe zadanie", url: "/exercise/add" },
];

const handleSubmit = (values: Pick<Exercise, "name" | "description">) => {
  return axios
    .post(process.env.SERVER_URL + ':' + process.env.PORT +"/api/exercise", values)
    .then(({ data: id }) => {
      Router.push(`/exercise/${id}`);
      toast.success("Dodano projekt");
    })
    .catch((error) => toast.error(error.message));
};

const initialValues = {
  name: "",
  description: "",
};

const ExerciseAddPage = () => {
  return (
    <Page title="Nowe zadanie" breadcrumbs={breadcrumbs}>
      <ExerciseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </Page>
  );
};

export default ExerciseAddPage;

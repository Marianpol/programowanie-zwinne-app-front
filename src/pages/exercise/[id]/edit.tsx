import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import axios from "axios";
import ExerciseForm from "modules/exercise/components/ExerciseForm";
import Exercise from "modules/exercise/types/Exercise";
import Router, { useRouter } from "next/router";
import React, { useMemo } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

const handleSubmit = (values: Pick<Exercise, "name" | "description">) => {
  return axios
    .put(process.env.SERVER_URL + ':' + process.env.PORT + "/api/exercise", values)
    .then(({ data: id }) => {
      Router.push(`/exercise/${id}`);
      toast.success("Edytowano projekt");
    })
    .catch((error) => toast.error(error.message));
};

const ExerciseEditPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: exercise, error } = useSWR<Exercise>(process.env.SERVER_URL + ':' + process.env.PORT +`/api/exercise/${id}`);

  const { name } = exercise ?? {};

  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Lista zadań", url: "/exercises" },
      { title: name ?? "-", url: `/exercise/${id}` },
      { title: "Edycja", url: `/exercise/${id}/edit` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  if (error) return <div>{error.message}</div>;
  if (!exercise) return <div>loading...</div>;

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ExerciseForm isEdit initialValues={exercise} onSubmit={handleSubmit} />
    </Page>
  );
};

export default ExerciseEditPage;

import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ExerciseForm from "modules/exercise/components/ExerciseForm";
import Exercise from "modules/exercise/types/Exercise";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../../mock.json";

const ExerciseEditPage = () => {
  const {
    query: { id },
  } = useRouter();

  const exercise: Exercise = useMemo(
    () => mock.exercises.find(({ id: exerciseId }) => `${exerciseId}` === id),
    [id]
  );

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

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ExerciseForm isEdit initialValues={exercise} />
    </Page>
  );
};

export default ExerciseEditPage;

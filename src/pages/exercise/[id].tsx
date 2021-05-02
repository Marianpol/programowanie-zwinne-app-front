import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ExerciseView from "modules/exercise/components/ExerciseView";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../mock.json";

const ExercisePage = () => {
  const {
    query: { id },
  } = useRouter();

  const exercise = useMemo(
    () => mock.exercises.find(({ id: exerciseId }) => `${exerciseId}` === id),
    [id]
  );

  const { name } = exercise ?? {};

  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Lista zadań", url: "/exercises" },
      { title: name ?? "-", url: `/exercise/${id}` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ExerciseView exercise={exercise} />
    </Page>
  );
};

export default ExercisePage;

import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ExerciseView from "modules/exercise/components/ExerciseView";
import Exercise from "modules/exercise/types/Exercise";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR from "swr";

const ExercisePage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: exercise, error } = useSWR<Exercise>(
    id ? `http://localhost:8080/api/exercise/${id}` : null
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

  if (error) return <div>{error.message}</div>;
  if (!exercise) return <div>loading...</div>;

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ExerciseView exercise={exercise} />
    </Page>
  );
};

export default ExercisePage;

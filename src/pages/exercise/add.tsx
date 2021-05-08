import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ExerciseForm from "modules/exercise/components/ExerciseForm";
import React from "react";

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Nowe zadanie", url: "/exercise/add" },
];

const ExerciseAddPage = () => {
  return (
    <Page title="Nowe zadanie" breadcrumbs={breadcrumbs}>
      <ExerciseForm />
    </Page>
  );
};

export default ExerciseAddPage;

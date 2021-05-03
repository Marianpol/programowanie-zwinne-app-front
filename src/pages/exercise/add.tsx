import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React, { useMemo } from "react";

const ExerciseAddPage = () => {
  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Nowe zadanie", url: "/exercise/add" },
    ],
    []
  );

  return (
    <Page title="Nowe zadanie" breadcrumbs={breadcrumbs}>
      Formularz - zadanie
    </Page>
  );
};

export default ExerciseAddPage;

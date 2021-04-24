import Page from "app/layout/components/Page";
import { useRouter } from "next/router";
import React from "react";

const ExercisePage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Page
      title={`Zadanie: ${id}`}
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista zadań", url: "/exercises" },
        { title: `Zadanie: ${id}`, url: `/exercise/${id}` },
      ]}
    >
      Zadanie {id}
    </Page>
  );
};

export default ExercisePage;

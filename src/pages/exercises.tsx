import TableWrapper from "app/components/TableWrapper";
import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Columns from "app/types/Columns";
import React from "react";
import mock from "../../mock.json";

export const exercises_columns: Columns[] = [
  { label: "Nazwa zadania", accessor: "name", options: { avatarAccessor: "name", width: "25%" } },
  { label: "Opis zadania", accessor: "description", options: { width: "60%" } },
  { label: "Data utworzenia", accessor: "createDate", options: { format: "date", width: "15%" } },
];

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Lista zadań", url: "/exercises" },
];

const ExercisesPage = () => {
  return (
    <Page title="Lista zadań" breadcrumbs={breadcrumbs}>
      <TableWrapper
        data={mock.exercises}
        columns={exercises_columns}
        url="/exercise"
        placeholder="Szukaj zadania..."
      />
    </Page>
  );
};

export default ExercisesPage;

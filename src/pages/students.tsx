import TableWrapper from "app/components/TableWrapper";
import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Columns from "app/types/Columns";
import Student from "modules/student/types/Student";
import React from "react";
import mock from "../../mock.json";

export const students_columns: Columns[] = [
  { label: "Student", accessor: "name", options: { avatarAccessor: "name" } },
  { label: "Numer indeksu", accessor: "indexNumber" },
  { label: "E-mail", accessor: "email" },
  { label: "Stacjonarny", accessor: "fullTimeStudies" },
];

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Lista studentów", url: "/students" },
];

const StudentsPage = () => {
  const students: Student[] = mock.students;

  return (
    <Page title="Lista studentów" breadcrumbs={breadcrumbs}>
      <TableWrapper
        data={students}
        columns={students_columns}
        url="/student"
        placeholder="Szukaj studenta..."
      />
    </Page>
  );
};

export default StudentsPage;

import Table from "app/components/Table";
import TablePagination from "app/components/TablePagination";
import TableSearch from "app/components/TableSearch";
import Page from "app/layout/components/Page";
import Columns from "app/types/Columns";
import Card from "app/ui/components/Card";
import React, { useState } from "react";

const columns: Columns[] = [
  {
    id: "name",
    label: "Student",
    accessor: "name",
    options: { avatarAccessor: "name" },
  },
  {
    id: "indexNumber",
    label: "Numer indeksu",
    accessor: "indexNumber",
  },
  {
    id: "email",
    label: "E-mail",
    accessor: "email",
  },
  {
    id: "fullTimeStudies",
    label: "Stacjonarny",
    accessor: "fullTimeStudies",
  },
];

const data = [
  {
    id: "1",
    name: "Mateusz Matysiak",
    indexNumber: "109542",
    email: "matmat008@utp.edu.pl",
    fullTimeStudies: "Tak",
  },
];

const StudentsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (type: "add" | "remove") => () => {
    if (type === "add") setPage((p) => p + 1);
    if (type === "remove") setPage((p) => p - 1);
  };

  const students = data.slice(page * 5, (page + 1) * 5);

  return (
    <Page
      title="Lista studentów"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista studentów", url: "/students" },
      ]}
    >
      <div style={{ marginBottom: 16 }}>
        <TableSearch placeholder="Szukaj studenta..." />
      </div>

      <Card style={{ display: "flex", flexDirection: "column", height: "90%", overflow: "hidden" }}>
        <div style={{ height: "100%", overflowY: "scroll", margin: "16px 16px 16px 16px" }}>
          <Table data={data} columns={columns} url="/student" />
        </div>

        <TablePagination
          onChangePage={handleChangePage}
          data={data}
          renderedData={students}
          rowsPerPage={rowsPerPage}
        />
      </Card>
    </Page>
  );
};

export default StudentsPage;

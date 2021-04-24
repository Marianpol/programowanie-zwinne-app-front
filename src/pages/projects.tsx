import Table from "app/components/Table";
import TablePagination from "app/components/TablePagination";
import TableSearch from "app/components/TableSearch";
import Page from "app/layout/components/Page";
import Columns from "app/types/Columns";
import Card from "app/ui/components/Card";
import React, { useState } from "react";

const columns: Columns[] = [
  { id: "name", label: "Nazwa projektu", accessor: "name", options: { avatarAccessor: "subject" } },
  { id: "subject", label: "Przedmiot", accessor: "subject" },
  { id: "status", label: "Status", accessor: "status", options: { type: "label" } },
  {
    id: "createDate",
    label: "Data utworzenia",
    accessor: "createDate",
    options: { format: "date" },
  },
];

const data = [
  {
    id: "1",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    id: "2",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    id: "3",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    id: "4",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    id: "5",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    id: "6",
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
];

const ProjectsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (type: "add" | "remove") => () => {
    if (type === "add") setPage((p) => p + 1);
    if (type === "remove") setPage((p) => p - 1);
  };

  const projects = data.slice(page * 5, (page + 1) * 5);

  return (
    <Page
      title="Lista projektów"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista projektów", url: "/projects" },
      ]}
    >
      <div style={{ marginBottom: 16 }}>
        <TableSearch placeholder="Szukaj projektu..." />
      </div>

      <Card style={{ display: "flex", flexDirection: "column", height: "90%", overflow: "hidden" }}>
        <div style={{ height: "100%", overflowY: "scroll", margin: "16px 16px 16px 16px" }}>
          <Table data={data} columns={columns} url="/project" />
        </div>

        <TablePagination
          onChangePage={handleChangePage}
          data={data}
          renderedData={projects}
          rowsPerPage={rowsPerPage}
        />
      </Card>
    </Page>
  );
};

export default ProjectsPage;

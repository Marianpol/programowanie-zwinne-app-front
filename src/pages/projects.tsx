import Card from "app/ui/components/Card";
import Table from "app/components/Table";
import Page from "app/layout/components/Page";
import Columns from "app/types/Columns";
import React from "react";

const columns: Columns[] = [
  { id: "name", label: "Nazwa projektu", accessor: "name" },
  { id: "subject", label: "Przedmiot", accessor: "subject" },
  { id: "status", label: "Status", accessor: "status", type: "label" },
  { id: "createDate", label: "Data utworzenia", accessor: "createDate", format: "date" },
];

const data = [
  {
    name: "Przykładowa nazwa projektu",
    subject: "Programowanie zwinne",
    status: true,
    createDate: new Date(),
  },
  {
    name: "Przykładowa nazwa projektu 2",
    subject: "Programowanie zwinne",
    status: false,
    createDate: new Date(),
  },
];

const ProjectsPage = () => {
  return (
    <Page
      title="Lista projektów"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista projektów", url: "/projects" },
      ]}
    >
      <Card>
        <Table data={data} columns={columns} />
      </Card>
    </Page>
  );
};

export default ProjectsPage;

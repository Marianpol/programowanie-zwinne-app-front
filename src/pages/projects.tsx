import TableWrapper from "app/components/TableWrapper";
import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Columns from "app/types/Columns";
import React from "react";
import mock from "../../mock.json";

export const projects_columns: Columns[] = [
  { label: "Nazwa projektu", accessor: "name", options: { avatarAccessor: "subject" } },
  { label: "Przedmiot", accessor: "subject" },
  { label: "Status", accessor: "status", options: { type: "label" } },
  { label: "Data utworzenia", accessor: "createDate", options: { format: "date" } },
];

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Lista projektów", url: "/projects" },
];

const ProjectsPage = () => {
  return (
    <Page title="Lista projektów" breadcrumbs={breadcrumbs}>
      <TableWrapper
        data={mock.projects}
        columns={projects_columns}
        url="/project"
        placeholder="Szukaj projektu..."
      />
    </Page>
  );
};

export default ProjectsPage;

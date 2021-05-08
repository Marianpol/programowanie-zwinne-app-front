import TableWrapper from "app/components/TableWrapper";
import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Columns from "app/types/Columns";
import Project from "modules/project/types/Project";
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

export const formatProjectsData = (data: Project[]) =>
  data?.map((project: any) => ({
    ...project,
    subject: project?.subject?.name ?? "-",
  }));

const ProjectsPage = () => {
  const projects: Project[] = formatProjectsData(mock.projects);

  return (
    <Page title="Lista projektów" breadcrumbs={breadcrumbs}>
      <TableWrapper
        data={projects}
        columns={projects_columns}
        url="/project"
        placeholder="Szukaj projektu..."
      />
    </Page>
  );
};

export default ProjectsPage;

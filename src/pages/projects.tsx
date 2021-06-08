import TableWrapper from "app/components/TableWrapper";
import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Columns from "app/types/Columns";
import Project from "modules/project/types/Project";
import React from "react";
import useSWR from "swr";

export const projects_columns: Columns[] = [
  { label: "Nazwa projektu", accessor: "name" },
  { label: "Przedmiot", accessor: "subject" },
  { label: "Status", accessor: "status", options: { type: "label" } },
  { label: "Data utworzenia", accessor: "createDate", options: { format: "date" } },
];

const breadcrumbs: IBreadcrumbs[] = [
  { title: "Strona główna", url: "/" },
  { title: "Lista projektów", url: "/projects" },
];

export const formatProjectsData = (data: Project[]) =>
  data?.map((project: Project) => ({
    ...project,
    subject: project?.subject?.name ?? "-",
  }));

const ProjectsPage = () => {
  const { data: projects, error } = useSWR<Project[]>(process.env.SERVER_URL + ':' + process.env.PORT +"/api/project");

  if (error) return <div>{error.message}</div>;
  if (!projects) return <div>loading...</div>;

  return (
    <Page title="Lista projektów" breadcrumbs={breadcrumbs}>
      <TableWrapper
        data={formatProjectsData(projects)}
        columns={projects_columns}
        url="/project"
        placeholder="Szukaj projektu..."
      />
    </Page>
  );
};

export default ProjectsPage;

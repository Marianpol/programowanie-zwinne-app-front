import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ProjectView from "modules/project/components/ProjectView";
import Project from "modules/project/types/Project";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../../mock.json";

export const formatData = (data: Project) => ({
  ...data,
  subject: data?.subject?.name ?? "-",
});

const ProjectPage = () => {
  const {
    query: { id },
  } = useRouter();

  const project: Project = useMemo(
    () => formatData(mock.projects.find(({ id: projectId }) => `${projectId}` === id)),
    [id]
  );

  const { name } = project ?? {};

  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Lista projektów", url: "/projects" },
      { title: name ?? "-", url: `/project/${id}` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ProjectView project={project} />
    </Page>
  );
};

export default ProjectPage;

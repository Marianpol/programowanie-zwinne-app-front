import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ProjectView from "modules/project/components/ProjectView";
import Project from "modules/project/types/Project";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR from "swr";

export const formatData = (data: Project) => ({
  ...data,
  subject: data?.subject?.name ?? "-",
});

const ProjectPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: project, error } = useSWR(id ? process.env.SERVER_URL + ':' + process.env.PORT +`/api/project/${id}` : null);

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

  if (error) return <div>{error.message}</div>;
  if (!project) return <div>loading...</div>;

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ProjectView project={project} />
    </Page>
  );
};

export default ProjectPage;

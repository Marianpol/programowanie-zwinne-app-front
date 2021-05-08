import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Exercise from "modules/exercise/types/Exercise";
import ProjectForm from "modules/project/components/ProjectForm";
import Project from "modules/project/types/Project";
import Student from "modules/student/types/Student";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../../mock.json";

const formatData = (data: Project) => ({
  ...data,
  users: data?.users.map(({ id }: Student) => id),
  exercises: data?.exercises.map(({ id }: Exercise) => id),
  subject: data?.subject?.id,
});

const ProjectEditPage = () => {
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
      { title: "Edycja", url: `/project/${id}/edit` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ProjectForm isEdit initialValues={project} />
    </Page>
  );
};

export default ProjectEditPage;

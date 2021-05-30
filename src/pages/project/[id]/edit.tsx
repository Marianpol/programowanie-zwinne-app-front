import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import axios from "axios";
import Exercise from "modules/exercise/types/Exercise";
import ProjectForm from "modules/project/components/ProjectForm";
import Project from "modules/project/types/Project";
import Student from "modules/student/types/Student";
import Router, { useRouter } from "next/router";
import React, { useMemo } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

const handleSubmit = (values: Project) => {
  return axios
    .put("http://localhost:8080/api/project", values)
    .then(({ data: id }) => {
      Router.push(`/exercise/${id}`);
      toast.success("Edytowano projekt");
    })
    .catch((error) => toast.error(error.message));
};

const formatData = (data: any): Project => ({
  ...data,
  users: data?.users.map(({ id }: Student) => id),
  exercises: data?.exercises.map(({ id }: Exercise) => id),
  subject: data?.subject?.id,
});

const ProjectEditPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, error } = useSWR<Project>(`http://localhost:8080/api/project/${id}`);

  const project = data ? formatData(data) : undefined;

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

  if (error) return <div>{error.message}</div>;
  if (!project) return <div>loading...</div>;

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <ProjectForm isEdit initialValues={project} onSubmit={handleSubmit} />
    </Page>
  );
};

export default ProjectEditPage;

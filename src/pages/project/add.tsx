import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import axios from "axios";
import ProjectForm from "modules/project/components/ProjectForm";
import Project from "modules/project/types/Project";
import Router from "next/router";
import React, { useMemo } from "react";
import { toast } from "react-toastify";

const handleSubmit = (data: Project) => {
  return axios
    .post("http://localhost:8080/api/project", data)
    .then(({ data: id }) => {
      Router.push(`/project/${id}`);
      toast.success("Dodano projekt");
    })
    .catch((error) => toast.error(error.message));
};

const initialValues: Project = {
  name: "",
  subject: "",
  status: true,
  exercises: [],
  users: [],
  files: [],
};

const ProjectAddPage = () => {
  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Nowy projekt", url: "/project/add" },
    ],
    []
  );

  return (
    <Page title="Nowy projekt" breadcrumbs={breadcrumbs}>
      <ProjectForm initialValues={initialValues} onSubmit={handleSubmit} />
    </Page>
  );
};

export default ProjectAddPage;

import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import ProjectForm from "modules/project/components/ProjectForm";
import React, { useMemo } from "react";

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
      <ProjectForm />
    </Page>
  );
};

export default ProjectAddPage;

import Page from "app/layout/components/Page";
import React from "react";

const ProjectsPage = () => {
  return (
    <Page
      title="Lista projektów"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista projektów", url: "/projects" },
      ]}
    >
      Lista projektów
    </Page>
  );
};

export default ProjectsPage;

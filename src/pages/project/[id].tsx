import Page from "app/layout/components/Page";
import { useRouter } from "next/router";
import React from "react";

const ProjectPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Page
      title={`Projekt: ${id}`}
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista projektów", url: "/projects" },
        { title: `Projekt: ${id}`, url: `/project/${id}` },
      ]}
    >
      Projekt {id}
    </Page>
  );
};

export default ProjectPage;

import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React, { useMemo } from "react";

const ProjectAddPage = () => {
  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Nowy projekt", url: "/projet/add" },
    ],
    []
  );

  return (
    <Page title="Nowy projekt" breadcrumbs={breadcrumbs}>
      Formularz - projekt
    </Page>
  );
};

export default ProjectAddPage;

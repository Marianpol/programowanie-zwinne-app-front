import Page from "app/layout/components/Page";
import { useRouter } from "next/router";
import React from "react";

const StudentPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Page
      title={`Student: ${id}`}
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista studentów", url: "/students" },
        { title: `Student: ${id}`, url: `/student/${id}` },
      ]}
    >
      Student {id}
    </Page>
  );
};

export default StudentPage;

import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import StudentView from "modules/student/components/StudentView";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../mock.json";

const StudentPage = () => {
  const {
    query: { id },
  } = useRouter();

  const user = useMemo(() => mock.students.find(({ id: studentId }) => `${studentId}` === id), [
    id,
  ]);

  const { name } = user ?? {};

  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Lista studentów", url: "/students" },
      { title: name ?? "-", url: `/student/${id}` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <StudentView user={user} />
    </Page>
  );
};

export default StudentPage;

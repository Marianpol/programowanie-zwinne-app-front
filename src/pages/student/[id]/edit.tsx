import Page from "app/layout/components/Page";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import StudentForm from "modules/student/components/StudentForm";
import Student from "modules/student/types/Student";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import mock from "../../../../mock.json";

const StudentEditPage = () => {
  const {
    query: { id },
  } = useRouter();

  const user: Student = useMemo(
    () => mock.students.find(({ id: studentId }) => `${studentId}` === id),
    [id]
  );

  const { name } = user ?? {};

  const breadcrumbs: IBreadcrumbs[] = useMemo(
    () => [
      { title: "Strona główna", url: "/" },
      { title: "Lista studentów", url: "/students" },
      { title: name ?? "-", url: `/student/${id}` },
      { title: "Edycja", url: `/student/${id}/edit` },
    ],
    [name, id]
  );

  const title = useMemo(() => name ?? "-", [name]);

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <StudentForm isEdit initialValues={user} />
    </Page>
  );
};

export default StudentEditPage;

import Page from "app/layout/components/Page";
import React from "react";

export default function Home() {
  return (
    <Page
      title="Strona główna"
      breadcrumbs={[{ title: "Strona główna", url: "/" }]}
    >
      Strona główna
    </Page>
  );
}

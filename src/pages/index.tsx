import Page from "app/layout/components/Page";
import Chat from "modules/chat/components/Chat";
import React from "react";
import IBreadcrumbs from "app/layout/types/breadcrumbs";
import mock from "../../mock.json";

const breadcrumbs: IBreadcrumbs[] = [{ title: "Strona główna", url: "/" }];

const HomePage = () => {
  return (
    <Page title="Strona główna" breadcrumbs={breadcrumbs}>
      <Chat data={mock.messages} />
    </Page>
  );
};

export default HomePage;

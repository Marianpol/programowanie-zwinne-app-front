import Page from "app/layout/components/Page";
import React from "react";

const ChatPage = () => {
  return (
    <Page
      title="Komunikator"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Komunikator", url: "/chat" },
      ]}
    >
      Komunikator
    </Page>
  );
};

export default ChatPage;

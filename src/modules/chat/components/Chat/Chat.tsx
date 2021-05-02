import Card from "app/ui/components/Card";
import React from "react";
import ChatContent from "../ChatContent";
import ChatFooter from "../ChatFooter";
import ChatHeader from "../ChatHeader";
import s from "./Chat.module.css";

export interface ChatProps {
  data: any;
}

const Chat = ({ data }: ChatProps) => {
  return (
    <Card className={s.root}>
      <ChatHeader />

      <ChatContent data={data} />

      <ChatFooter />
    </Card>
  );
};

export default Chat;

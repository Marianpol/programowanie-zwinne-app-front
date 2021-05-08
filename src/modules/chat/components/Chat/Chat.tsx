import Card from "app/ui/components/Card";
import Message from "modules/chat/types/Message";
import React from "react";
import ChatContent from "../ChatContent";
import ChatFooter from "../ChatFooter";
import ChatHeader from "../ChatHeader";
import s from "./Chat.module.css";

export interface ChatProps {
  data: Message[];
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

import CardContent from "app/ui/components/CardContent";
import IMessage from "modules/chat/types/Message";
import React from "react";
import { ChatProps } from "../Chat/Chat";
import Message from "../Message";
import s from "./ChatContent.module.css";

const ChatContent = ({ data }: ChatProps) => {
  const user = "Mateusz Matysiak";
  return (
    <CardContent className={s.content}>
      {data.map((item: IMessage) => {
        const type = user === item.author.name ? "primary" : "secondary";
        return (
          <Message key={item.id} type={type} {...item}>
            {item.message}
          </Message>
        );
      })}
    </CardContent>
  );
};

export default ChatContent;

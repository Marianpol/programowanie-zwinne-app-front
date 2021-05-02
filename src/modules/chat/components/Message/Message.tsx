import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./Message.module.css";

export interface MessageProps {
  children: ReactNode;
  author: any;
  style?: CSSProperties;
  type?: "primary" | "secondary";
}

const Message = ({ children, type, author, ...props }: MessageProps) => {
  const rootClassName = clsx(s.root, {
    [s.rootPrimary]: type === "primary",
    [s.rootSecondary]: type === "secondary",
  });
  // createDate
  return (
    <Card className={rootClassName}>
      <CardContent>
        <Text size="small" weight="semi-bold" className={s.author}>
          {author.name}, 12.04.2021
        </Text>
        <Text>{children}</Text>
      </CardContent>
    </Card>
  );
};

export default Message;

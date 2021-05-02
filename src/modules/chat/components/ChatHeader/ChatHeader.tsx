import Text from "app/ui/components/Text";
import React from "react";
import s from "./ChatHeader.module.css";

const ChatHeader = () => {
  return (
    <Text weight="medium" size="large" className={s.header}>
      Czat
    </Text>
  );
};

export default ChatHeader;

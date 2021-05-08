import Text from "app/ui/components/Text";
import React from "react";
import s from "./ChatHeader.module.css";

const ChatHeader = () => {
  return (
    <div className={s.header}>
      <Text weight="medium" size="large">
        Czat
      </Text>
    </div>
  );
};

export default ChatHeader;

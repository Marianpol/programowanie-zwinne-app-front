import ButtonIcon from "app/ui/components/ButtonIcon";
import SendIcon from "app/ui/icons/SendIcon";
import React from "react";
import s from "./ChatFooter.module.css";

const ChatFooter = () => {
  return (
    <div className={s.footer}>
      <input placeholder="Wiadomość..." className={s.input} />
      <ButtonIcon className={s.button} icon={<SendIcon width="25px" fill="#D0D0D0" />} />
    </div>
  );
};

export default ChatFooter;

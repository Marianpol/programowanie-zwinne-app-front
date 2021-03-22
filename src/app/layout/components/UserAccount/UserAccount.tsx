import React from "react";
import s from "./UserAccount.module.css";
import Text from "app/ui/components/Text";

const UserAccount = () => {
  return (
    <div className={s.root}>
      <Text upperCase weight="medium" className={s.text}>
        M
      </Text>
    </div>
  );
};

export default UserAccount;

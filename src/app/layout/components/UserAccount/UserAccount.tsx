import Avatar from "app/ui/components/Avatar";
import Text from "app/ui/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import s from "./UserAccount.module.css";

const UserAccount = () => {
  const [popup, setPopup] = useState(false);

  const toggle = () => setPopup((lastPopup) => !lastPopup);

  return (
    <>
      <Avatar onClick={toggle} component="button" className={s.root} variant="round">
        JK
      </Avatar>

      {popup ? (
        <div className={s.popupMenu}>
          <Text className={s.userName} upperCase size="small" align="center">
            Jan Kowalski
          </Text>
          <Text className={s.logout} upperCase size="small" align="center">
            <Link href="/login">Wyloguj się</Link>
          </Text>
        </div>
      ) : null}
    </>
  );
};

export default UserAccount;

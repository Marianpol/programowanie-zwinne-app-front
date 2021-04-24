import React from "react";
import Navigation from "../Navigation";
import UserAccount from "../UserAccount";
import s from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <div className={s.root}>
      <Navigation />

      <UserAccount />
    </div>
  );
};

export default PageHeader;

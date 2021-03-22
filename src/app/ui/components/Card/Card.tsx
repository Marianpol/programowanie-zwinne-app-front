import React, { ReactNode } from "react";
import s from "./Card.module.css";

export interface CardProps {
  children?: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className={s.root}>{children}</div>;
};

export default Card;

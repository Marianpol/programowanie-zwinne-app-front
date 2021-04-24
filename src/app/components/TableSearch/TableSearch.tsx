import SearchIcon from "app/ui/icons/SearchIcon";
import React, { CSSProperties } from "react";
import s from "./TableSearch.module.css";

export interface TableSearchProps {
  placeholder?: string;
  style?: CSSProperties;
}

const TableSearch = ({ placeholder = "Szukaj...", ...props }: TableSearchProps) => {
  return (
    <label {...props} htmlFor="search" className={s.label}>
      <SearchIcon width="15px" fill="#cecece" className={s.icon} />
      <input placeholder={placeholder} id="search" className={s.input} />
    </label>
  );
};

export default TableSearch;

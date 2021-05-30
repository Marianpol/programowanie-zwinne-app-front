import SearchIcon from "app/ui/icons/SearchIcon";
import React, { ChangeEvent, CSSProperties } from "react";
import s from "./TableSearch.module.css";

export interface TableSearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
}

const TableSearch = ({ onChange, placeholder = "Szukaj...", ...props }: TableSearchProps) => {
  return (
    <label {...props} htmlFor="search" className={s.label}>
      <SearchIcon width="15px" fill="#cecece" className={s.icon} />
      <input placeholder={placeholder} id="search" className={s.input} onChange={onChange} />
    </label>
  );
};

export default TableSearch;

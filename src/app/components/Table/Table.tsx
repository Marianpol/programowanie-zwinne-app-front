import useTable from "app/hooks/useTable";
import Columns from "app/types/Columns";
import React from "react";
import s from "./Table.module.css";

export interface TableProps {
  data: any[];
  columns: Columns[];
}

const Table = ({ data, columns }: TableProps) => {
  const { rows, getValue } = useTable({ data, columns });

  return (
    <table className={s.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className={s.th}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr className={s.tr} key={row.key}>
              {row.cells.map((cell, index) => {
                return (
                  <td key={index} className={s.td}>
                    {getValue({ row, cell })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

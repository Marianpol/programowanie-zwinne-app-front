import useTable from "app/hooks/useTable";
import Columns from "app/types/Columns";
import React, { CSSProperties } from "react";
import s from "./Table.module.css";

export interface TableProps {
  data: any[];
  columns: Columns[];
  url: string;
  style?: CSSProperties;
}

const Table = ({ data, columns, url, style }: TableProps) => {
  const { rows, headers, getValue } = useTable({ data, columns, url });

  return (
    <table style={style} className={s.table}>
      <thead>
        <tr>
          {headers.map((column, index) => (
            <th key={index} className={s.th}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.key} className={s.tr}>
              {row.cells.map((cell, index) => {
                return (
                  <td key={index} className={s.td} style={{ width: cell.options?.width }}>
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

import Columns from "app/types/Columns";
import Avatar from "app/ui/components/Avatar";
import Label from "app/ui/components/Label";
import Link from "next/link";
import React from "react";

const avatarStyle = {
  marginRight: 16,
};

const useTable = ({ data, columns, url }: { data: any[]; columns: Columns[]; url: string }) => {
  const rows = data.map((item, index) => ({
    cells: columns,
    data: item,
    key: index,
  }));

  const headers = columns;

  const getValue = ({ row, cell, key }: { row: any; cell: Columns; key: number }) => {
    if (cell.options?.type === "label") return <Label status={row.data[cell.accessor]} />;
    if (cell.options?.format === "date") {
      return new Date(row.data[cell.accessor]).toLocaleString();
    }
    if (cell.accessor === "name") {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar color="secondary" style={avatarStyle}>
            {key + 1}
          </Avatar>
          <Link href={`${url}/${row.data.id}`}>{row.data[cell.accessor]}</Link>
        </div>
      );
    }

    return `${row.data[cell.accessor]}`;
  };

  return {
    rows,
    headers,
    getValue,
  };
};

export default useTable;

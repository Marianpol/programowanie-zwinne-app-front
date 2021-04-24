import firstLetters from "app/libs/firstLetters";
import Columns from "app/types/Columns";
import Avatar from "app/ui/components/Avatar";
import Label from "app/ui/components/Label";
import React from "react";
import Link from "next/link";

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

  const getValue = ({ row, cell }: { row: any; cell: Columns }) => {
    if (cell.options?.type === "label") return <Label status={row.data[cell.accessor]} />;
    if (cell.options?.format === "date") return row.data[cell.accessor].toLocaleDateString();
    if (cell.accessor === "name") {
      const avatarLabel = firstLetters(row.data[cell.options?.avatarAccessor ?? ""] ?? "");

      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar color="secondary" style={avatarStyle}>
            {avatarLabel}
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

import Columns from "app/types/Columns";
import Label from "app/ui/components/Label";

const useTable = ({ data, columns }: { data: any[]; columns: Columns[] }) => {
  const rows = data.map((item, index) => ({
    cells: columns,
    data: item,
    key: index,
  }));

  const getValue = ({ row, cell }: any) => {
    if (cell.type === "label") return <Label status={row.data[cell.accessor]} />;
    if (cell.format === "date") return row.data[cell.accessor].toLocaleDateString();

    return row.data[cell.accessor];
  };

  return {
    rows,
    getValue,
  };
};

export default useTable;

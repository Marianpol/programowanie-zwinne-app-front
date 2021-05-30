export default interface Columns {
  label?: string;
  accessor: string;
  options?: {
    width?: string;
    type?: "label" | "action";
    format?: "date";
  };
}

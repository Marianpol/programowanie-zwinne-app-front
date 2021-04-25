export default interface Columns {
  label?: string;
  accessor: string;
  options?: {
    width?: string;
    avatarAccessor?: string;
    type?: "label" | "action";
    format?: "date";
  };
}

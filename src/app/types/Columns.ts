export default interface Columns {
  id: string;
  label?: string;
  accessor: string;
  options?: {
    width?: string;
    avatarAccessor?: string;
    type?: "label" | "action";
    format?: "date";
  };
}

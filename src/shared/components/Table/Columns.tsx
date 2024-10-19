import { columnsStyles } from "./styles/Columns";
import { ColumnsProps } from "./types/Columns";

export function Columns({ value }: ColumnsProps[0]) {
  return <th className={columnsStyles()}>{value}</th>;
}

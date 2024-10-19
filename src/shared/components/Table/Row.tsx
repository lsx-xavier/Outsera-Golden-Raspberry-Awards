import { rowsTdStyles } from "./styles/Rows";
import { RowsProps } from "./types/Rows";

type RowTdProps = Pick<RowsProps[0]["columnsValues"][0], "value">;

export function Row({ value }: RowTdProps) {
  return <td className={rowsTdStyles()}>{value}</td>;
}

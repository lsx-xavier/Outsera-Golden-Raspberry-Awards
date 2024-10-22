import { rowsTdStyles } from "./styles/Rows";
import { RowsProps } from "./types/Rows";

type RowTdProps = {
  isLoading?: boolean;
  row?: RowsProps[0]["columnsValues"][0]["value"];
};

export function Row({ row, isLoading }: RowTdProps) {
  return (
    <td
      className={rowsTdStyles({
        isLoading,
      })}
    >
      {isLoading ? null : row || ""}
    </td>
  );
}

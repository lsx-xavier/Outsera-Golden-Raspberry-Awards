import { randomId } from "@/shared/utils/randomId";
import { rowsTrStyles } from "./styles/Rows";
import { Row } from "./Row";
import { RowContentProps } from "./types/RowsContent";

export function RowContent({
  columns,
  rows,
  isLoading,
  rowsLoading = 10,
}: RowContentProps) {
  if (isLoading)
    return Array.from({ length: rowsLoading }, () => (
      <tr
        data-testid="tr"
        key={randomId()}
        className={rowsTrStyles({
          isLoading,
        })}
      >
        {Array.from({ length: columns.length }).map(() => (
          <Row key={randomId()} isLoading={isLoading} />
        ))}
      </tr>
    ));

  return rows.map((row) => (
    <tr key={row.id} className={rowsTrStyles()}>
      {row.columnsValues.map((column) => {
        const findItem = row.columnsValues.find(
          (rowItem) => rowItem.id === column.id,
        );

        if (!findItem) return null;

        return <Row key={findItem?.id} row={findItem.value} />;
      })}
    </tr>
  ));
}

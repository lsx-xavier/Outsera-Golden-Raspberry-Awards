import { Columns } from "./Columns";
import { Row } from "./Row";
import { rowsTrStyles } from "./styles/Rows";
import { tableStyles } from "./styles/Table";
import { TableProps } from "./types/Table";

export function Table({ columns, rows }: TableProps) {
  return (
    <table className={tableStyles()}>
      <thead className="bg-slate-50">
        <tr>
          {columns.map((column) => (
            <Columns key={column.id} {...column} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className={rowsTrStyles()}>
            {row.columnsValues.map((column) => {
              const findItem = row.columnsValues.find(
                (rowItem) => rowItem.id === column.id,
              );

              if (!findItem) return null;

              return <Row key={findItem?.id} value={findItem.value} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

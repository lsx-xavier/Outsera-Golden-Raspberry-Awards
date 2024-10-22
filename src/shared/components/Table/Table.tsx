import { Columns } from "./Columns";
import { RowContent } from "./RowContent";
import { tableStyles } from "./styles/Table";
import { TableProps } from "./types/Table";

export function Table({ columns, rows, isLoading, rowsLoading }: TableProps) {
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
        <RowContent
          isLoading={isLoading}
          rowsLoading={rowsLoading}
          columns={columns}
          rows={rows}
        />
      </tbody>
    </table>
  );
}

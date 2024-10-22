import { ColumnsProps } from "./Columns";
import { TableProps } from "./Table";

export type RowsProps = {
  id: string;
  columnsValues: ColumnsProps;
}[];

export type RowContentProps = TableProps;

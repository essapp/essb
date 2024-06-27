import type {
  TableColumnType as ColumnType,
  TableProps as ATableProps,
} from "ant-design-vue";
import { FieldProps } from "..";

declare type DefaultRecordType = Record<string, unknown>;

export interface TableColumnType<RecordType> extends ColumnType<RecordType> {
  editable?: boolean;
  fieldProps: FieldProps;
}

export interface TableProps<RecordType = DefaultRecordType>
  extends Omit<ATableProps<RecordType>, "columns"> {
  columns?: TableColumnType<RecordType>[];
}

export { Table } from "ant-design-vue";

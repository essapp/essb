import type { TableProps, TableColumnType } from "..";
const tuple = <T extends string[]>(...args: T) => args;
const ValidateStatuses = tuple("success", "warning", "error", "validating", "");
type ValidateStatus = (typeof ValidateStatuses)[number];
export interface ValidateInfo {
  autoLink?: boolean;
  required?: boolean;
  validateStatus?: ValidateStatus;
  help?: any;
}
declare type DefaultRecordType = Record<string, unknown>;
export type Option<RecordType extends DefaultRecordType = DefaultRecordType> = {
  value: any;
  text: any;
  record: RecordType;
  index: number;
  renderIndex: number;
  column: TableColumnType<RecordType>;
};
// type ProColumnType<RecordType> = ColumnType<RecordType> & {
//   valueType?: 'index' | 'indexBorder' | 'text' | 'select';
//   search?: boolean;
// };
export type Etable1Props<
  RecordType extends DefaultRecordType = DefaultRecordType,
> = TableProps<RecordType> &
  Partial<{
    // columns: TableColumnType<RecordType>[];
    mode?: "modify" | "query";
    // getRows?: (record:RecordType[]) => RecordType[];
    // cardBordered: boolean | { search?: boolean; table?: boolean };
  }>;

export { default as Etable1 } from "./Etable1.vue";

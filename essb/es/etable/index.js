// export type { TableProps as EtableProps } from "..";

// type EditableTableProps = Parameters<typeof Table>[0];
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var ValidateStatuses = tuple("success", "warning", "error", "validating", "");

// type ProColumnType<RecordType> = ColumnType<RecordType> & {
//   valueType?: 'index' | 'indexBorder' | 'text' | 'select';
//   search?: boolean;
// };

export { default as Etable } from "./Etable.vue";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Etable", {
  enumerable: true,
  get: function get() {
    return _Etable.default;
  }
});
var _Etable = _interopRequireDefault(require("./Etable.vue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
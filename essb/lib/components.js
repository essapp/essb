var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components.ts
var components_exports = {};
__export(components_exports, {
  App: () => import_app.App,
  Button: () => import_button.Button,
  Check: () => import_check.Check,
  ConfigProvider: () => import_configprovider.ConfigProvider,
  Date: () => import_date.Date,
  Etable: () => import_etable.Etable,
  Field: () => import_field.Field,
  Form: () => import_form.Form,
  Hrow: () => import_hrow.Hrow,
  Image: () => import_image.Image,
  Input: () => import_input.Input,
  Label: () => import_label.Label,
  Number: () => import_number.Number,
  Qr: () => import_qr.Qr,
  Radio: () => import_radio.Radio,
  Range: () => import_range.Range,
  Select: () => import_select.Select,
  Switch: () => import_switch.Switch,
  TabPane: () => import_tabs.TabPane,
  Table: () => import_table.Table,
  Tabs: () => import_tabs.Tabs,
  Text: () => import_text.Text,
  Time: () => import_time.Time,
  Tree: () => import_tree.Tree,
  theme: () => import_theme.theme
});
module.exports = __toCommonJS(components_exports);
var import_app = require("./app");
var import_button = require("./button");
var import_check = require("./check");
var import_configprovider = require("./configprovider");
var import_date = require("./date");
var import_etable = require("./etable");
var import_field = require("./field");
var import_form = require("./form");
var import_hrow = require("./hrow");
var import_image = require("./image");
var import_input = require("./input");
var import_label = require("./label");
var import_number = require("./number");
var import_qr = require("./qr");
var import_radio = require("./radio");
var import_range = require("./range");
var import_select = require("./select");
var import_switch = require("./switch");
var import_table = require("./table");
var import_tabs = require("./tabs");
var import_text = require("./text");
var import_theme = require("./theme");
var import_time = require("./time");
var import_tree = require("./tree");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App,
  Button,
  Check,
  ConfigProvider,
  Date,
  Etable,
  Field,
  Form,
  Hrow,
  Image,
  Input,
  Label,
  Number,
  Qr,
  Radio,
  Range,
  Select,
  Switch,
  TabPane,
  Table,
  Tabs,
  Text,
  Time,
  Tree,
  theme
});

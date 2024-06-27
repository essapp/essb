<template>
  <ConfigProvider
    :theme="{
      algorithm: theme.darkAlgorithm,
    }"
  >
    <Etable></Etable>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Ref, UnwrapRef } from "vue";
import {
  ConfigProvider,
  theme,
  Etable,
  TableColumnType,
} from "../src";
import { cloneDeep } from "lodash-es";
// import { EHrow } from "../src";
// import type { EHrowProps } from "../src";

// const views: EHrowProps = {
//   items: [
//     {
//       id: 0,
//       label: "账号",
//       rowProps: {
//         itemType: "input",
//         itemProps: { type: "text" },
//       },
//     },
//     {
//       id: 1,
//       label: "密码",
//       rowProps: {
//         itemType: "input",
//         itemProps: { type: "password" },
//       },
//     },
//   ],
// };
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  default: boolean;
}
const columns: TableColumnType<Record<string, unknown>>[] = [
  {
    title: "name",
    dataIndex: "name",
    width: "30%",
    editable: true,
    fieldProps: {
      itemType: "input",
    },
  },
  {
    title: "age",
    dataIndex: "age",
    fieldProps: {
      itemType: "number",
    },
  },
  {
    title: "address",
    dataIndex: "address",
    fieldProps: {
      itemType: "input",
    },
  },
  {
    title: "default",
    dataIndex: "default",
    editable: true,
    fieldProps: {
      itemType: "check",
    },
  },
];
const dataSource: Ref<DataItem[]> = ref([
  {
    key: "0",
    name: "Edward King 0",
    age: 32,
    address: "London, Park Lane no. 0",
    default: true,
  },
  {
    key: "1",
    name: "Edward King 1",
    age: 32,
    address: "London, Park Lane no. 1",
    default: false,
  },
]);

const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

const edit = (key: string) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
};
const save = (key: string) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};
const onRow = (record: DataItem) => {
  return {
    onclick: () => edit(record.key),
    onfocus: () => edit(record.key),
    onMouseenter: () => edit(record.key),
    onMouseleave: () => save(record.key),
  };
};
</script>

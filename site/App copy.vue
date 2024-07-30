<template>
  <ConfigProvider
    :theme="{
      algorithm: theme.darkAlgorithm,
    }"
  >
    <Etable :dataSource :columns></Etable>
    <Hrow v-bind="{...views}"></Hrow>
    <button @click="ji">点击</button>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { UnwrapRef } from "vue";
import {
  ConfigProvider,
  theme,
  Etable,
  TableColumnType,
} from "../src";
import { cloneDeep } from "lodash-es";
import { Hrow } from "../src";
import type { HrowProps } from "../src";

const views: HrowProps = {
  items: [
    {
      id: 0,
      label: "账号",
      filedProps: {
        itemType: "input",
        itemProps: { type: "text" },
      },
    },
    {
      id: 1,
      label: "密码",
      filedProps: {
        itemType: "input",
        itemProps: { type: "password" },
      },
    },
    {
      id: 3,
      filedProps: {
        itemType: "number",
        itemProps: { type: "number" },
      },
    },
  ],
};

interface DataItem extends Record<string, unknown> {
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
const dataSource: DataItem[] = [
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
];

const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

function ji(){
   console.log("父主件的dataSource:",dataSource);
};

function handleCustomEvent(payload) {
      console.log(payload); // 输出 'Hello from child'
    };

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

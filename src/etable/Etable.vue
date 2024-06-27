<template>
  <Table
    bordered
    :data-source="dataSource"
    :custom-row="onRow"
    :columns="columns"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.editable">
        <div class="editable-cell">
          <div
            v-if="editableData[record.key]"
            class="editable-cell-input-wrapper"
          >
            <div v-if="column.fieldProps.itemType === 'check'">
              <Check :defaultChecked="text"></Check>
            </div>
            <div v-else>
              <Input :default-value="text" />
            </div>
          </div>
          <div v-else class="editable-cell-text-wrapper">
            <div v-if="column.fieldProps.itemType === 'check'">
              <Check :checked="text"></Check>
            </div>
            <div v-else>{{ text || " " }}</div>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-if="column.fieldProps.itemType === 'check'">
          <Check :checked="text"></Check>
        </div>
        <div v-else>{{ text || " " }}</div>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Ref, UnwrapRef } from "vue";
import { Check, Input, Table } from "..";
import { cloneDeep } from "lodash-es";

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  default: boolean;
}

const columns = [
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
  console.log(editableData[key]);
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

<template>
  <Table bordered :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <div class="editable-cell">
          <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
            <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
            <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || ' ' }}
            <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
          </div>
        </div>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Ref, UnwrapRef } from "vue";
import { Input, Table } from "..";
import { CheckOutlined, EditOutlined } from "@ant-design/icons-vue";
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
  },
  {
    title: "age",
    dataIndex: "age",
  },
  {
    title: "address",
    dataIndex: "address",
  },
  {
    title: "default",
    dataIndex: "default",
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
    default: true,
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
</script>

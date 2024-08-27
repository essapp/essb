<template>
  <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
  <Table bordered :data-source="datasource" :custom-row="onRow" :columns>
    <template #bodyCell="{ column, text, record, index }">
      <template v-if="column.editable">
        <div class="editable-cell">
          <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
            <div v-if="column.fieldProps.itemType === 'check'">
              <Check :defaultChecked="text" v-model:checked="editableData[record.key][column.dataIndex]"></Check>
            </div>
            <div v-else>
              <Input :default-value="text" v-model:value="editableData[record.key][column.dataIndex]" />
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
  import { Check, EtableProps, Input, Table } from "..";
  import { cloneDeep } from "lodash-es";

  interface DataItem extends Record<string, unknown> {
    key: string;
    name: string;
    age: number;
    address: string;
    default: boolean;
  }


  const { columns, dataSource, ...props } = withDefaults(
    defineProps < EtableProps > (),
    {}
  );

  const datasource: Ref<DataItem[]> = ref(dataSource);
  const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

  const edit = (key: string) => {
    editableData[key] = cloneDeep(
      datasource.value.filter((item) => key === item.key)[0]
    );
  };

  const save = (record: DataItem, key: string) => {
    console.log("record.key:", record.key)
    console.log(editableData[record.key]);

    console.log("record之前:", record)

    Object.assign(datasource.value.filter(item => key === item.key)[0], editableData[key]);
    delete editableData[key];
    console.log("record之后:", record)

    console.log("datasource:",datasource)
  };

  const onRow = (record: DataItem) => {
    return {
      onclick: () => edit(record.key),
      onfocus: () => edit(record.key),
      onMouseenter: () => edit(record.key),
      onMouseleave: () => save(record, record.key),
    };
  };
  
  const handleAdd = () => {
    console.log("dataSource:",dataSource)
    const newData = {
      key: `5`,
      name: `Edward King `,
      age: 32,
      address: `London, Park Lane no. `,
      default: false,
    };
    dataSource.push(newData);
  };
</script>
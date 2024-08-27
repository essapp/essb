<template>
  <a-button @click="onSelectNone">SELECTION_INVERT</a-button>
  <a-table bordered :data-source="dataSource" :row-selection="rowSelection" :rowKey="record=>record.userid"
    :custom-row="onRow" :columns="columns" :tableEdit size="small" class="ant-table-striped"
    :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)">
    <template #bodyCell="{ column, text, record, index }">
      <!-- 编辑状态组件形态 -->
      <template v-if="tableEdit && column.editable">
        <div v-if="column.fieldProps.edit_state === 'input'">
          <a-input :id="column.dataIndex+index" v-model:value="record[column.dataIndex]" placeholder="input search text"
            style="margin: -5px 0" />
        </div>
        <div v-if="column.fieldProps.edit_state === 'searchinput'">
          <a-input-search :id="column.dataIndex+index" v-model:value="record[column.dataIndex]"
            placeholder="input search text" style="margin: -5px 0" @search="onSearch" />
        </div>
        <div v-if="column.fieldProps.edit_state === 'check'">
          <a-checkbox :id="column.dataIndex+index" :defaultChecked="text"
            v-model:checked="record[column.dataIndex]"></a-checkbox>
        </div>
        <div v-if="column.fieldProps.edit_state === 'datetime'">
          <a-date-picker :id="column.dataIndex+index" :default-value="text ? dayjs(text, 'YYYY-MM-DD HH:mm:ss') : null"
            v-model:value="record[column.dataIndex]" value-format="YYYY-MM-DD HH:mm:ss" show-time />
          <!-- <a-date-picker :value="record[column.dataIndex] ? dayjs(record[column.dataIndex], 'YYYY-MM-DD') : null"/> -->
        </div>

        <div v-if="column.fieldProps.edit_state === 'select'">
          <a-select :id="column.dataIndex+index" ref="select" :default-value="text"
            v-model:value="record[column.dataIndex]" style="width: 120px"
            :options="column.fieldProps.options"></a-select>
        </div>
        <div v-if="column.fieldProps.edit_state === 'text'">{{ record[column.dataIndex] || " " }}</div>

      </template>
      <!-- 显示状态下组件形态 -->
      <template v-else>
        <div v-if="column.fieldProps.show_state === 'check'">
          <a-checkbox :defaultChecked="text" :checked="record[column.dataIndex]"></a-checkbox>
        </div>
        <div v-if="column.fieldProps.show_state === 'progress'">
          <a-progress :percent="text" status="active" />
        </div>
        <div v-if="column.fieldProps.show_state === 'select'">
          <a-select disabled ref="select" :default-value="text" v-model:value="record[column.dataIndex]"
            style="width: 120px" :options="column.fieldProps.options"></a-select>
        </div>
        <div v-if="column.fieldProps.show_state === 'text'">{{ record[column.dataIndex] || " " }}</div>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
  import { reactive, ref, unref, defineComponent, computed } from "vue";
  import { Check, EtablexProps, Input, Table } from "..";
  import { cloneDeep } from "lodash-es";
  import { defineProps, watchEffect, onMounted } from 'vue';
  import dayjs, { Dayjs } from 'dayjs';

  import { getCurrentInstance } from 'vue'

  const { proxy } = getCurrentInstance();

  const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

  const props = defineProps({
    columns: { type: Object, default: () => { } },
    dataSource: { type: Object, default: () => { } },
    tableEdit: { type: Object, default: () => { } },
  });

  // const dateFormat = 'YYYY/MM/DD';

  // const value1 = ref < Dayjs > (dayjs('2023-01-01', dateFormat));

  watchEffect(() => {
    // console.log("props.dataSource:", props.dataSource)
    // console.log("props.columns:", props.columns);
    // console.log("props.tableEdit:", props.tableEdit);
  }
  );

  const getRecord = (record, index) => {
    proxy.$emit('getRecord', record, index)
  }

  const onRow = (record, index, column, text) => {
    return {
      onclick: () => {
        console.log("record:", record)
        console.log("index:", index)
        console.log("column:", column)
        console.log("text:", text)
        getRecord(record, index)
      },
    }
  };

  // const selectedRowKeys=[]

  const rowSelection: TableProps['rowSelection'] = {
    selectedRowKeys,
    onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      proxy.$emit('multipleSelection', selectedRows)
      // selectedRowKeys=selectedRowKeys
    },
  };

  // 用户清空选择的回调函数
  const onSelectNone = () => {
    alert("jjjj:")
    selectedRowKeys = []
  };


</script>
<style scoped>
  .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
  }
</style>
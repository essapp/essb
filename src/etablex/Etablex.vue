<template>
     <!-- :rowKey="record=>record.userid"  -->
  <a-table bordered :data-source="dataSource" :row-selection="rowSelection"
    :custom-row="onRow" :columns="columns" :tableEdit size="small"
    :rowKey="index=>index"
    class="ant-table-striped" :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)">
    <template #bodyCell="{ column, text, record, index }">
      <!-- 编辑状态组件形态 -->
      <template v-if="tableEdit && column.editable">
        <div v-if="column.fieldProps.edit_state === 'input'">
          <a-input :id="column.dataIndex+index" v-model:value="record[column.dataIndex]" placeholder="input search text"
            style="margin: -5px 0" @change="onChange(record, index,column,text)"
            @blur="blur(record, index,column,text)" @focus="focus(record,index,column,text)"
            />
        </div>
        <div v-if="column.fieldProps.edit_state === 'searchinput'">
          <a-input-search :id="column.dataIndex+index" v-model:value="record[column.dataIndex]"
            placeholder="input search text" style="margin: -5px 0" 
            @change="onChange(record, index,column,text)" @blur="blur(record, index,column,text)"
            @focus="focus(record,index,column,text)"/>
        </div>
        <div v-if="column.fieldProps.edit_state === 'check'">
          <a-checkbox :id="column.dataIndex+index" :defaultChecked="text" v-model:checked="record[column.dataIndex]"
            @change="onChange(record, index,column, text)" @blur="blur(record, index,column, text)"
            @focus="focus(record,index,column, text)" ></a-checkbox>
        </div>
        <div v-if="column.fieldProps.edit_state === 'datetime'">
          <a-date-picker :id="column.dataIndex+index" :default-value="text ? dayjs(text, 'YYYY-MM-DD HH:mm:ss') : null"
            v-model:value="record[column.dataIndex]" value-format="YYYY-MM-DD HH:mm:ss" show-time
            @change="onChange(record, index,column, text)" @blur="blur(record, index,column, text)"
            @focus="focus(record,index,column, text)" />
          <!-- <a-date-picker :value="record[column.dataIndex] ? dayjs(record[column.dataIndex], 'YYYY-MM-DD') : null"/> -->
        </div>

        <div v-if="column.fieldProps.edit_state === 'select'">
          <a-select :id="column.dataIndex+index" ref="select" :default-value="text"
            v-model:value="record[column.dataIndex]" style="width: 120px" :options="column.fieldProps.options"
            @change="onChange(record, index,column, text)" @blur="blur(record, index,column, text)"
            @focus="focus(record,index,column, text)"></a-select>
        </div>
        <div v-if="column.fieldProps.edit_state === 'text'">{{ record[column.dataIndex]}}</div>

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
        <div v-if="column.fieldProps.show_state === 'text'">{{ record[column.dataIndex]}}</div>
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
  // import VueDraggableResizable from 'vue-draggable-resizable';

  // Vue.component('vue-draggable-resizable', VueDraggableResizable);

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

  const onMouseleave=(record, index, column, text)=>{
    proxy.$emit('onMouseleave', record, index, column, text)
  }

  const onRow = (record, index, column, text) => {
    return {
      onclick: () => {
        // console.log("record:", record)
        // console.log("index:", index)
        // console.log("column:", column)
        // console.log("text:", text)
        getRecord(record, index)
      },
      onMouseleave:()=>{
        onMouseleave(record, index, column, text)
      }
    }
  };

  const onChange = (record, index, column, text) => {
    console.log("onChange:")
    proxy.$emit('onChange', record, index, column, text)
  }

  const blur = (record, index, column, text) => {
    // console.log("当选择器的输入框失去焦点时触发 after field:",record, index)
    proxy.$emit('after_field', record, index, column, text)
  }

  const focus = (record, index, column, text) => {
    console.log("当选择器的输入框获得焦点时触发,执行行了before field; record值:",record,"    ----index值:",index)
    proxy.$emit('before_field', record, index, column, text)
  }

  // const input = (record, index, column, text) => {
  //   // console.log("在 Input 值改变时触发,执行行了input; record值:",record,"    ----index值:",index)
  //   proxy.$emit('input', record, index, column, text)
  // }

  const rowSelection: TableProps['rowSelection'] = {
    // selectedRowKeys,
    onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      proxy.$emit('multipleSelection', selectedRows)
      // selectedRowKeys=selectedRowKeys
    },
  };

</script>
<style scoped>
  .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
  }
</style>
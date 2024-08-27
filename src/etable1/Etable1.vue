<template>
  <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
  <a-table bordered :data-source="dataSource1" :columns="columns1">
  </a-table>
</template>
<script lang="ts" setup>
  import { onMounted,watchEffect, reactive, ref } from 'vue';
  import { Check, Etable1Props, Input, Table } from "..";
  import type { Ref, UnwrapRef } from 'vue';
  import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
  import { cloneDeep } from 'lodash-es';

  interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }

  const { columns1, dataSource1, ...props } = withDefaults(
    defineProps < Etable1Props > (),
    {}
  );
  // const props = defineProps({
  //   columns1: { type: Object, default: () => { } },
  //   dataSource1: { type: Object, default: () => { } },
  //   // tableEdit: { type: Object, default: () => { } },
  // });

  // const count = computed(() => dataSource1.length + 1);
  const count = 5

  onMounted(() => {
    console.log("123")
    // console.log("dataSource1:",dataSource1)
  })

    
  watchEffect(() => {
        console.log("props.dataSource:", props.dataSource1)
        console.log("props.columns:", props.columns1);
        // console.log("props.tableEdit:", props.tableEdit);
    }
    );

  const handleAdd = () => {
    console.log("dataSource1:",props.dataSource1)
    const newData = {
      key: `5`,
      name: `Edward King `,
      age: 32,
      address: `London, Park Lane no. `,
    };
    dataSource1.push(newData);
  };
</script>
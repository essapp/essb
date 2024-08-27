<template>
  <a-button size="small" :disabled="state_button.accept" plain @click="accept()">
    <template #icon>
      <CheckCircleOutlined />
    </template>
  </a-button>
  <a-button size="small" :disabled="state_button.cancel" plain @click="cancel()">
    <template #icon>
      <CloseCircleOutlined />
    </template>
  </a-button>
  <a-button size="small" :disabled="state_button.handleAddTable" plain @click="handleAddTable()">
    <template #icon>
      <PlusOutlined />
    </template>新增</a-button>
  <a-button size="small" :disabled="state_button.rowRemoveTable" plain @click="rowRemoveTable()">
    <template #icon>
      <MinusOutlined />
    </template>删除</a-button>
  <a-button size="small" :disabled="state_button.handleEditTable" plain @click="handleEditTable()">
    <template #icon>
      <EditOutlined />
    </template>编辑</a-button>
  <a-button size="small" :disabled="state_button.query" plain @click="query()">
    <template #icon>
      <SearchOutlined />
    </template>查询</a-button>
  <!-- <a-button type="primary" shape="circle">
    <template #icon><CheckOutlined /></template>
  </a-button> -->
  <!-- <a-button type="primary" shape="circle">X</a-button> -->
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">1st item</a-menu-item>
        <a-menu-item key="2">2nd item</a-menu-item>
        <a-menu-item key="3">3rd item</a-menu-item>
      </a-menu>
    </template>
    <a-button size="small">
      按钮多级菜单
      <DownOutlined />
    </a-button>
  </a-dropdown>
  <Etablex :dataSource :columns :tableEdit @getRecord="handleCustomEvent"></Etablex>
</template>

<script setup lang="ts">
  import { reactive, onMounted, ref } from "vue";
  import type { UnwrapRef } from "vue";
  import { getCurrentInstance } from 'vue';

  import { CloseCircleOutlined, CheckCircleOutlined, PlusOutlined, MinusOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons-vue';

  import {
    ConfigProvider,
    theme,
    Etablex,
    TableColumnType,
  } from "../src";
  import { cloneDeep } from "lodash-es";

  const tableEdit = ref(false)//表单编辑状态切换
  const g_action_choice = ref(null)//操作状态insert新增  modify编辑

  const i_record = ref(null)
  const i_row = ref(null)

  const state_button = reactive({
    accept: true,   //确认
    cancel: true,   //取消
    handleAddTable: false,   //新增
    handleRemoveTable: false,//多选删除
    rowRemoveTable: true,//单行删除
    handleEditTable: false,  //编辑
    toggleFullScreen: false, //
    screen: false,
    query: false,
    load: false
  });

  const columns: TableColumnType<Record<string, unknown>>[] = [
    {
      title: "用户编码",//字段名称
      dataIndex: "userid",//字段
      width: 150,//栏位宽度
      editable: true,//栏位是否可编辑
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "searchinput"//编辑时的组件形态
      },
    },
    {
      title: "姓名",
      dataIndex: "name",
      width: 150,
      editable: false,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "input"//编辑时的组件形态
      },
    },
    {
      title: "性别",
      dataIndex: "sex",
      width: 50,
      editable: true,
      fieldProps: {
        show_state: "select",//显示时的组件形态
        edit_state: "select",//编辑时的组件形态
        options: [{ value: '男', label: '男' }, { value: '女', label: '女' }, { value: '', label: '' }]
      },
    },
    {
      title: "邮箱",
      dataIndex: "email",
      width: 150,
      editable: true,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "input"//编辑时的组件形态
      },
    },
    {
      title: "年龄",
      dataIndex: "age",
      width: 150,
      editable: true,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "input"//编辑时的组件形态
      },
    },
    {
      title: "评分",
      dataIndex: "num",
      width: 150,
      editable: true,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "input"//编辑时的组件形态
      },
    },
    {
      title: "进度",
      dataIndex: "progress",
      width: 200,
      editable: true,
      fieldProps: {
        show_state: "progress",//显示时的组件形态
        edit_state: "input"//编辑时的组件形态
      },
    },
    {
      title: "注册时间",
      dataIndex: "datetime",
      width: 150,
      editable: true,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "datetime"//编辑时的组件形态
      },
    },
    {
      title: "有效否",
      dataIndex: "status",
      width: 100,
      editable: true,
      fieldProps: {
        show_state: "text",//显示时的组件形态
        edit_state: "check"//编辑时的组件形态
      },
    },
  ];

  const dataSource: DataItem[] = [
    {
      // key: "0",
      userid: "id01",
      name: "Edward King 0",
      sex: "男",
      email: "123@qq.com",
      age: 32,
      num: 30,
      progress: 60,
      datetime: "2024-01-14 10:19:18",
      // datetime:"2024-01-14",
      status: "Y",
    },
    {
      // key: "1",
      userid: "id02",
      name: "Edward King 1",
      sex: "女",
      email: "232@qq.com",
      age: 33,
      num: 50,
      progress: 80,
      datetime: "2024-02-24 21:40:56",
      status: "Y",
    },
    {
      // key: "2",
      userid: "id03",
      name: "Zx01",
      sex: "女",
      email: "332@qq.com",
      age: 33,
      num: 50,
      progress: 100,
      datetime: "2024-03-24 22:40:56",
      status: "N",
    },
  ];

  onMounted(() => {
    console.log("初始化")
  });



  const { proxy } = getCurrentInstance();

  const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

  const handleCustomEvent = (record, index) => {
    i_record.value = record//将选中的信息赋值给行全局变量
    i_row.value = index
  }

  const dj = () => {
    console.log("测试组件返回的行信息:", i_record.value)
    console.log("测试组件返回的i_row信息:", i_row.value)
  }

  /**
   * 整表新增一行记录
   */
  const handleAddTable = () => {
    state_button.query = true
    state_button.handleEditTable = true
    state_button.accept = false
    state_button.cancel = false

    tableEdit.value = true
    g_action_choice.value = 'insert'

    if (i_row.value == null) {
      // console.log("dataSource.length11=", dataSource.length)
      i_row.value = Number(dataSource.length - 1)//取最大行号
      // console.log("i_row.value=", i_row.value)
    }

    const length = dataSource.length
    dataSource.value.push({
      // key: length === 0 ? '0' : dataSource[length - 1].key === undefined
      //   ? length.toString() : (parseInt(dataSource[length - 1].key) + 1).toString(),
      userid: "id03",
      name: "Zx01",
      sex: "女",
      email: "332@qq.com",
      age: 33,
      num: 50,
      progress: 100,
      datetime: "2024-03-24 22:40:56",
      status: "N",
    })

    // dataSource.splice(i_row.value + 1, 0, {//当前行下加一行
    //   'userid': "",
    //   'name': "",
    //   'sex': "",
    //   'email': "",
    //   'age': "",
    //   'num': "",
    //   'progress': "",
    //   'datetime': "",
    //   'status': "",
    // })

    console.log("dataSource.length222=", dataSource)
    proxy.$nextTick(() => {
      //input标签获取焦点
      // document.getElementById("userid" + Number((i_row.value + 1))).focus()
    })
  }


  /**
   * 整表编辑
   */
  const handleEditTable = () => {
    state_button.query = true
    state_button.handleEditTable = true
    state_button.rowRemoveTable = false
    state_button.accept = false
    state_button.cancel = false

    tableEdit.value = true//修改为编辑状态

    g_action_choice.value = 'modify'

    if (i_row.value == null) {//如果没有选中行就默认编辑第一行
      i_row.value = 0//取最大行号
    }
    proxy.$nextTick(() => {
      //input标签获取焦点
      document.getElementById("userid" + Number((i_row.value))).focus()
    })
  }


  /**
   * accept
   */
  const accept = () => {
    state_button.query = false
    state_button.handleEditTable = false
    state_button.handleAddTable = false
    state_button.handleRemoveTable = false
    state_button.rowRemoveTable = true
    state_button.accept = true
    state_button.cancel = true

    tableEdit.value = false
    i_row.value = null
    if (g_action_choice.value == 'query') {
      // getData();
    }
    if (g_action_choice.value == 'modify') {
      //调用修改的函数
      console.log("调用了修改的函数：", g_action_choice.value)
    }
    if (g_action_choice.value == 'insert') {
      //调用新增的函数
      console.log("调用了新增的函数：", g_action_choice.value)
    }
    g_action_choice.value = null
  }


  /**
   * cancel
   */
  const cancel = () => {
    state_button.query = false
    state_button.handleEditTable = false
    state_button.handleAddTable = false
    state_button.handleRemoveTable = false
    state_button.rowRemoveTable = true
    state_button.accept = true
    state_button.cancel = true

    tableEdit.value = false
    i_row.value = null
    g_action_choice.value = null
  }


</script>
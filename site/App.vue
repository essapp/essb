<template>
  <div class="container" id="screen">
    <div class="top">
      <div v-if="iconshow">
        <el-button-group>
          <el-button size="small" icon="el-icon-circle-check" type="danger" :disabled="state_button.accept" plain
            @click="accept()">

          </el-button>
          <el-button size="small" icon="el-icon-circle-close" type="danger" :disabled="state_button.cancel" plain
            @click="cancel()">

          </el-button>
        </el-button-group>

        <el-button-group>
          <el-button size="small" icon="el-icon-plus" type="primary" :disabled="state_button.handleAddTable" plain
            @click="handleAddTable()">
            新增行
          </el-button>
          <el-button size="small" icon="el-icon-minus" type="primary" :disabled="state_button.handleRemoveTable" plain
            @click="handleRemoveTable()">
            删除
          </el-button>
          <el-button size="small" icon="el-icon-edit" type="primary" :disabled="state_button.handleEditTable" plain
            @click="handleEditTable()">
            编辑
          </el-button>
          <el-button size="small" icon="el-icon-search" type="primary" :disabled="state_button.query" plain
            @click="query()">
            查询
          </el-button>
          <el-button size="small" icon="el-icon-full-screen" type="danger" :disabled="state_button.toggleFullScreen"
            plain @click="toggleFullScreen()">
            Toggle Fullscreen
          </el-button>
          <el-button size="small" icon="el-icon-full-screen" type="danger" :disabled="state_button.screen" plain
            @click="screen()">
            {{ fullscreen ? '关闭全屏' : '部分全屏' }}
          </el-button>
          <el-button size="small" icon="el-icon-loading" type="danger" :disabled="state_button.load" plain
            @click="refresh">
            重新加载数据
          </el-button>
          <el-button size="small" icon="el-icon-loading" type="danger" plain @click="c_iconshow()">
            隐藏按钮
          </el-button>


          <!-- <el-dropdown> -->
          <!-- <el-button size="small" icon="el-icon-loading" type="danger" plain @click="c_iconshow()">
        按钮多级菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button> -->
          <el-dropdown split-button size="small" icon="el-icon-loading" type="primary" plain>
            按钮多级菜单
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>

                  <el-dropdown>
                    按钮二级菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                      </el-dropdown-menu>

                    </template>

                  </el-dropdown>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </el-button-group>
      </div>
      <div v-else @click="c_iconshow()">
        <i>...</i>
      </div>

    </div>
    <div class="middle">
      <el-table border size="small" row-key="id" :data="tableList" fit highlight-current-row highlight-selection-row
        @selection-change="selectChange" scrollable height="100%" @row-click="handleRowClick"
        :row-class-name="tableRowClassName" @cell-mouse-enter="handleCellMouseEnter">
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" width="100" align="center">
          <template #default="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="180" align="center" />
        <el-table-column prop="rpmName" label="名称" width="auto" align="center" show-overflow-tooltip>
          <template #default="scope">
            <div v-if="scope.row.isEdit">
              <div class="table-container-td__name">
                <el-input size="small" v-model="scope.row.name" placeholder="请输入名称..." clearable></el-input>
              </div>
            </div>
            <div v-else>{{ scope.row.name }}</div>

          </template>
        </el-table-column>

        <el-table-column prop="sex" label="性别" width="auto" align="center" show-overflow-tooltip>
          <template #default="scope">
            <div v-if="scope.row.isEdit">
              <div class="table-container-td__name">
                <el-switch v-model="scope.row.sex" active-color="#13ce66">
                </el-switch>
              </div>
            </div>
            <div v-else>{{ scope.row.sex }}</div>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" width="150">
          <template #default="scope">
            <div>
              <el-button size="small" icon="el-icon-plus" type="primary" plain
                @click="handleAddRow(scope.$index, scope.row, $event)" circle>
              </el-button>
              <el-button size="small" icon="el-icon-minus" type="danger" plain
                @click="handleRemoveRow(scope.$index, scope.row, $event)" circle>
              </el-button>
              <el-button size="small" icon="el-icon-edit" type="danger" plain
                @click="handleEditRow(scope.$index, scope.row, $event)" circle>
              </el-button>
              <el-button size="small" icon="el-icon-caret-right" type="danger" plain
                @click="handleRightRow(scope.$index, scope.row, $event)" circle>
              </el-button>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="暂无数据"></el-empty>
        </template>
      </el-table>
    </div>
    <div class="bottom">
      <el-pagination :small="true" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
        layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>

      <div class="BrTable-do">
        <el-button @click="refresh" icon="el-icon-refresh" circle style="margin-left:15px"></el-button>
      </div>
    </div>
  </div>
</template>



<script setup>
  // import { h, onMounted, onUnmounted, ref, getCurrentInstance, reactive, watch, nextTick } from 'vue'
  import { getCurrentInstance, ref, reactive } from 'vue'
  import { onMounted } from 'vue'
  const state_button = reactive({
    accept: true,   //确认
    cancel: true,   //取消
    handleAddTable: false,   //新增
    handleRemoveTable: false,//删除
    handleEditTable: false,  //编辑
    toggleFullScreen: false, //
    screen: false,
    query: false,
    load: false
  });

  // 代理对象
  const { proxy } = getCurrentInstance()

  const multipleSelection = ref([])

  const fullscreen = ref(false)

  const iconshow = ref(true)

  const i_row = ref(null)

  console.log("qqq")

  // 表格数据
  const tableList = ref([
    {
      'id': parseInt(Math.random() * 10000) + '-' + new Date().getTime(), // 1234-1701741061535
      'name': '张三',
      'sex': true,
      'isEdit': false
    },
    {
      'id': '123432', // 1234-1701741061535
      'name': '李四',
      'sex': false,
      'isEdit': false
    }
  ])

  onMounted(() => {
  })

  const tableRowClassName = ({ row, rowIndex }) => {
    //在el-table中加:row-class-name="tableRowClassName" :current-row-key="NowRowIndex"
    //用于在新建TABLE时就给row.row_index赋值行上去；这样在其它地方就可以通过row.row_index取到行
    row.row_index = rowIndex;
  }


  const handleRowClick = (row) => {
    console.log('单击时当前行号:row.row_index..........', row.row_index);
    i_row.value = row.row_index
  }

  // const handleCellMouseEnter = (index, row, column, cell, event) => {
  const handleCellMouseEnter = () => {
    // console.log('移动时当前行号:row.row_index..........', row.row_index);
  }

  /**
   * 新增一行记录
   */
  const handleAddRow = (index, row, event) => {
    console.log("新增行记录的行号是row.row_index:", row.row_index)
    console.log("row:", row)
    console.log("event:", event)
    // tableList.value.splice(index + 1, 0, {//index时为在最后一行加一行
    tableList.value.splice(row.row_index + 1, 0, {//当前行下加一行
      'id': parseInt(Math.random() * 10000) + '-' + new Date().getTime(), // 1234-1701741061535
      'name': '',
      'sex': true
    })
  }

  /**
   * 删除一行记录
   */
  const handleRemoveRow = (index, row, event) => {
    console.log("row:", row)
    console.log("event:", event)
    if (tableList.value.length > 1) {
      tableList.value.splice(index, 1)
    } else {
      proxy.$message({ type: 'warning', message: '必须保留一行哦！', duration: 2000 })
    }
  }
  /**
   * 编辑一行记录
   */
  const handleEditRow = (index, row, event) => {
    console.log("row:", row)
    console.log("event:", event)
    row.isEdit = true
  }
  /**
   * 提交一行记录
   */
  const handleRightRow = (index, row, event) => {
    console.log("row:", row)
    console.log("event:", event)
    row.isEdit = false
  }
  /**
   * 整表编辑
   */
  const handleEditTable = () => {

    state_button.query = true
    state_button.handleEditTable = true
    state_button.accept = false
    state_button.cancel = false

    tableList.value.forEach(item => {
      item.isEdit = true
    })
    console.log("this.tableList:", tableList)
  }
  /**
   * 整表新增一行记录
   */
  const handleAddTable = () => {
    state_button.query = true
    state_button.handleEditTable = true
    state_button.accept = false
    state_button.cancel = false

    var i = 0
    tableList.value.forEach(item => {
      item.isEdit = true
      i++
    })
    console.log("i:", i)
    console.log("this.tableList:", tableList)

    if (i_row.value == null) {
      const newRow = {
        id: parseInt(Math.random() * 10000) + '-' + new Date().getTime(),
        name: '',
        sex: true,
        isEdit: true
      }
      tableList.value.push(newRow);
    } else {
      tableList.value.splice(i_row.value + 1, 0, {//当前行下加一行
        'id': parseInt(Math.random() * 10000) + '-' + new Date().getTime(), // 1234-1701741061535
        'name': '',
        'sex': true,
        isEdit: true
      })
    }
    console.log("新增行记录的行号是i_row:", i_row.value)




  }

  /**
   * 查询
   */
  const query = () => {

    state_button.accept = false
    state_button.cancel = false
    state_button.handleAddTable = true
    state_button.handleRemoveTable = true
    state_button.handleEditTable = true

    tableList.value = []; // 清空表格数据
    const newRow = {
      id: '',
      name: '',
      sex: '',
      isEdit: true
    }
    tableList.value.push(newRow);
  }

  const selectChange = (val) => {
    multipleSelection.value = val
    console.log("this.multipleSelection:", multipleSelection)
  }

  /**
 * 删除选中行记录
 */
  const handleRemoveTable = () => {
    multipleSelection.value.forEach((item) => {
      console.log("item:", item)
      const index = tableList.value.indexOf(item);
      console.log("index:", index)
      if (index !== -1) {
        tableList.value.splice(index, 1);
      }
    });
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  }

  const enterFullScreen = () => {
    let element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  const screen = () => {
    let element = document.getElementById('screen');
    if (fullscreen.value) {
      // 关闭全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // 全屏
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    fullscreen.value = !fullscreen.value;
  }

  /**
   * accept
   */
  const accept = () => {

    state_button.query = false
    state_button.handleEditTable = false
    state_button.handleAddTable = false
    state_button.handleRemoveTable = false
    state_button.accept = true
    state_button.cancel = true
    tableList.value.forEach(item => {
      // console.log("item:",item)
      // item.isEdit = false // 添加一个属性 初始值为false
      // 数据响应式的问题  数据变化 视图更新
      // 添加的动态属性 不具备响应式特点
      // this.$set(目标对象, 属性名称, 初始值) 可以针对目标对象 添加的属性 添加响应式
      //  this.$set(item, 'isEdit', true)
      item.isEdit = false
    })
    console.log("this.tableList:", tableList)
  }


  /**
   * cancel
   */
  const cancel = () => {
    state_button.query = false
    state_button.handleEditTable = false
    state_button.handleAddTable = false
    state_button.handleRemoveTable = false
    state_button.accept = true
    state_button.cancel = true

    tableList.value.forEach(item => {
      item.isEdit = false
    })
    console.log("this.tableList:", tableList)
  }

  const refresh = () => {
    tableList.value = [
      {
        'id': parseInt(Math.random() * 10000) + '-' + new Date().getTime(), // 1234-1701741061535
        'name': '张三',
        'sex': true,
        'isEdit': false
      },
      {
        'id': '123432', // 1234-1701741061535
        'name': '李四',
        'sex': false,
        'isEdit': false

      }]
  }

  const c_iconshow = () => {
    iconshow.value = !iconshow.value
  }

</script>

<style>
  .body {
    height: 100%;
  }

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .top {
    /* background-color: #a9ff29; */
    background-color: #FFFFFF;
  }

  .middle {
    flex: 1;
    overflow: auto;
    /* background-color: #ffb91b; */
    background-color: #FFFFFF;
  }

  .bottom {
    height: 30px;
    /* background-color: #40c3ff; */
    display: flex;
    /* background-color: #FFFFFF; */
  }

  .BrTable-do {
    white-space: nowrap;
    margin-left: 15px;
    /* background-color: #ffb91b; */
  }
</style>
<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item></el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
        <span>教育部机关司局和直属事业单位信息</span>
      </el-header>

      <el-main>
        <el-table max-height="550" :data="tableData"  show-summary stripe>
          <el-table-column prop="index" label="序号" >
          </el-table-column>
          <el-table-column prop="title" label="机关司局/直属单位" >
          </el-table-column>
          <el-table-column prop="code" label="代码" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'dXPe7DD8mG';

  import * as sourceData from '@/assets/datas/dXPe7DD8mG.js' ;

  let tableData = [];

  if (sourceData.default) {
    tableData = sourceData.default;
  }


  export default {
    name: id_name,
    data() {
      return {
        tableData: tableData
      }
    }
  }

</script>

<style scoped>

</style>

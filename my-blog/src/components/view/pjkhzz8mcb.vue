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
        <span>美国基本指标2018-2019</span>
      </el-header>

      <el-main>
        <el-table :data="tableData"  show-summary stripe>
          <el-table-column prop="title" label="主要指标名称" >
          </el-table-column>
          <el-table-column prop="year" label="年份" >
          </el-table-column>
          <el-table-column prop="dataValue" label="数值" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'pjkhzz8mcb';

  import * as sourceData from '@/assets/datas/pjkhzz8mcb.js' ;

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

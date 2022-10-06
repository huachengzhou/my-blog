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
        <span>2022年8月成都统计月报</span>
      </el-header>

      <el-main>
        <el-table :data="tableData"  show-summary stripe>
          <el-table-column prop="title" label="主要经济指标" >
          </el-table-column>
          <el-table-column prop="unit" label="单位" >
          </el-table-column>
          <el-table-column prop="dataValue" label="数值" >
          </el-table-column>
          <el-table-column prop="rax" label="比值" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'eY4jHnDjDs';

  import * as sourceData from '@/assets/datas/eY4jHnDjDs.js' ;

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

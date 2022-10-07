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
        <span>粮食数据</span>
      </el-header>

      <el-main>
        <el-table max-height="550" :data="tableData"  show-summary stripe>
          <el-table-column prop="zhibiao" label="指标" >
          </el-table-column>
          <el-table-column prop="location" label="地区" >
          </el-table-column>
          <el-table-column prop="time_string" label="数据时间" >
          </el-table-column>
          <el-table-column prop="data_value" label="数值" >
          </el-table-column>
          <el-table-column prop="other" label="所属栏目" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'k5b4h2swabJ';

  import * as sourceData from '@/assets/datas/k5b4h2swabJ.js' ;

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

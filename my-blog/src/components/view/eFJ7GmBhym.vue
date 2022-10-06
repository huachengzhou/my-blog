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
        <span>美国经济政策与外债</span>
      </el-header>

      <el-main>
        <el-table :data="tableData"  show-summary stripe>
          <el-table-column prop="title" label="指数" >
          </el-table-column>
          <el-table-column prop="time_string_1" label="2017" >
          </el-table-column>
          <el-table-column prop="time_string_2" label="2018" >
          </el-table-column>
          <el-table-column prop="time_string_3" label="2019" >
          </el-table-column>
          <el-table-column prop="time_string_4" label="2020" >
          </el-table-column>
          <el-table-column prop="time_string_5" label="2021" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'eFJ7GmBhym';

  import * as sourceData from '@/assets/datas/eFJ7GmBhym.js' ;

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

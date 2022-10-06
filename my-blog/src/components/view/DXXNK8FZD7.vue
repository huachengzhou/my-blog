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
        <span>世界股市交易周转率2012-2021</span>
      </el-header>

      <el-main>
        <el-table :data="tableData"  show-summary stripe>
          <el-table-column prop="title" label="国家" >
          </el-table-column>
          <el-table-column prop="time_string_1" label="2012" >
          </el-table-column>
          <el-table-column prop="time_string_2" label="2013" >
          </el-table-column>
          <el-table-column prop="time_string_3" label="2014" >
          </el-table-column>
          <el-table-column prop="time_string_4" label="2015" >
          </el-table-column>
          <el-table-column prop="time_string_5" label="2016" >
          </el-table-column>
          <el-table-column prop="time_string_6" label="2017" >
          </el-table-column>
          <el-table-column prop="time_string_7" label="2018" >
          </el-table-column>
          <el-table-column prop="time_string_8" label="2019" >
          </el-table-column>
          <el-table-column prop="time_string_9" label="2020" >
          </el-table-column>
          <el-table-column prop="time_string_10" label="2021" >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  let id_name = 'DXXNK8FZD7';

  import * as sourceData from '@/assets/datas/DXXNK8FZD7.js' ;

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

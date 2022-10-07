<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i @click="" class="el-icon-download" style="margin-right: 15px"></i>
          <!--<i @click="download" class="el-icon-download" style="margin-right: 15px"></i>-->
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item></el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
        <span>人口数据</span>
      </el-header>

      <el-main>
        <el-table max-height="550" :data="tableData" show-summary stripe>
          <el-table-column prop="zhibiao" label="指标">
          </el-table-column>
          <el-table-column prop="location" label="地区">
          </el-table-column>
          <el-table-column prop="time_string" label="数据时间">
          </el-table-column>
          <el-table-column prop="data_value" label="数值">
          </el-table-column>
          <el-table-column prop="other" label="所属栏目">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  //生成Excel依赖包
  import xlsx from 'node-xlsx';
  //写入文件依赖包
  /// <reference path="./typings/index.d.ts" />
  import  fs from 'fs';

  const writeReadStream = require('lei-stream');
  let id_name = 'ttz8wB46aJ';

  import * as sourceData from '@/assets/datas/ttz8wB46aJ.js' ;

  console.log(fs) ;
  console.log(writeReadStream) ;

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
    },
    methods: {
      download() {
        const list = [
          {
            name: "sheet",
            data: [
              ["data1", "data2", "data3"],
              ["data1", "data2", "data3"],
              ["data1", "data2", "data3"],
            ],
          },
        ];

        const buffer = xlsx.build(list);





        fs.writeFile("testFile.xlsx", buffer, function (err) {
          if (err) {
            console.log(err, "保存excel出错");
          } else {
            console.log("写入excel成功!!!");
          }
        });

        console.log("download");
      }
    }
  }

</script>

<style scoped>

</style>

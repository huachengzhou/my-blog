<template>
  <div>
    <!--<el-image :src="headPortrait"></el-image>-->


    <!--<el-image v-if="myQRCodeImage" class="myQRCodeImage"-->
    <!--:src="myQRCodeImage"/>-->


    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-button @click="$router.push({path:'/'})" type="primary" round icon="el-icon-top">
            回到首页
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item></el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
        <span></span>
      </el-header>

      <el-main>
        <el-table max-height="550" :data="dataList" show-summary stripe>
          <el-table-column prop="id" label="索引">
          </el-table-column>
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="timeString" label="时间">
          </el-table-column>
        </el-table>

        <el-pagination
          style="margin-top: 20px; text-align: center"
          :current-page="currentPage"
          :total="total"
          :page-size="limit"
          :page-sizes="[3, 5, 10]"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="prev, pager, next, jumper,->,sizes,total"
        >
        </el-pagination>
      </el-main>
    </el-container>


    <!-- #707070 -->
    <!--<vue-particles-->
      <!--class="login-background"-->
      <!--color="#97D0F2"-->
      <!--:particleOpacity="0.7"-->
      <!--:particlesNumber="50"-->
      <!--shapeType="circle"-->
      <!--:particleSize="4"-->
      <!--linesColor="#97D0F2"-->
      <!--:linesWidth="1"-->
      <!--:lineLinked="true"-->
      <!--:lineOpacity="0.4"-->
      <!--:linesDistance="150"-->
      <!--:moveSpeed="3"-->
      <!--:hoverEffect="true"-->
      <!--hoverMode="grab"-->
      <!--:clickEffect="true"-->
      <!--clickMode="push">-->
    <!--</vue-particles>-->
  </div>
</template>

<script>
  import * as commonUtils from '@/commonJs/untils.js' ;

  let dataList = [];

  let dataLen = 1000;

  for (let i = 1; i <= dataLen; i++) {
    let timeString = commonUtils.randomNum(2001, 2022) + "-" + commonUtils.randomNum(1, 12) + "-" + commonUtils.randomNum(1, 30);
    dataList.push({id: i, title: commonUtils.randomString(15), timeString: timeString});
  }


  let QRCode = require('qrcode');
  import img_a1 from "@/assets/images/20221005121843.jpg";

  export default {
    name: "MyHome",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        date_time: new Date().toUTCString(),
        dataList: [],
        dataAllList: dataList,
        headPortrait: img_a1,
        myQRCodeImage: "",
        //代表的分页器第几页
        currentPage: 1,
        //当前页数展示数据条数
        limit: 7,
        //总共数据条数
        total: 0
      }
    },
    mounted() {
      //载入后
      this.openQRCode();
      this.getPageList();
    },
    methods: {
      getPageList() {
        let dataAllList = this.dataAllList;
        this.total = dataAllList.length;
        let currentPage = this.currentPage;
        let limit = this.limit;
        let total = this.total;
        let start = (currentPage - 1) * limit;
        let end = currentPage * limit;
        if (end > total) {
          end = total;
        }
        let tempList = dataAllList.slice(start, end);
        this.dataList = tempList;
      },
      handleCurrentChange(currentPage) {
        console.log(currentPage, 'currentPage');
        this.currentPage = currentPage;
        this.getPageList();
        console.log(this.currentPage); //点击第几页
      },
      //当分页器某一页需要展示数据条数发生变化的时候会触发
      handleSizeChange(limit) {
        //整理参数
        this.limit = limit;
        this.getPageList();
      },
      openQRCode() {
        let that = this;

        QRCode.toDataURL('https://huachengzhou.github.io/lifeDoc/pdf/studyIndex.html?u=' + '', function (err, url) {
          that.myQRCodeImage = url;
          console.log(url);
        });
      },

    }
  }
</script>

<style scoped>
  .myQRCodeImage {
    width: 390px;
    height: 390px;
  }
</style>

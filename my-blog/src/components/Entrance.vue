<template>
  <div style="">

    <!-- #707070 -->
    <vue-particles
      class="login-background"
      color="#97D0F2"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#97D0F2"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>

    <el-row type="flex" class="row-bg" justify="space-around" style="">
      <el-col :span="9">
        <div class="">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>我的主页</span>
              <el-button plain="true" @click.stop="openRouter('/my')" style="float: right; padding: 3px 0"
                         type="text">详细
              </el-button>
            </div>
            <div class="block">
              <span class="demonstration"></span>
              <el-image :src="headPortrait"></el-image>
            </div>

            <el-calendar>
              <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
              <template
                slot="dateCell"
                slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                  {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
              </template>
            </el-calendar>

          </el-card>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>分类数据</span>
              <el-button plain="true" @click.stop="openRouter('/home')" style="float: right; padding: 3px 0"
                         type="text">详细
              </el-button>
            </div>

            <!--<div class="block">-->
            <!--<span class="demonstration"></span>-->
            <!--<el-image :src="classificationSrc"></el-image>-->
            <!--</div>-->

            <div id="main_chart" :style="{width: '300px', height: '300px'}">

            </div>
            <div id="main_chart_new" :style="{width: '300px', height: '300px'}">

            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import head_portrait from "@/assets/images/mine_200.png";
  import classification_src from "@/assets/images/v2-bdf101d047d64799bb04d9787cb49d70_r.jpg";
  import * as commonUtils from '@/commonJs/untils.js' ;
  import * as chartsA from '@/assets/datas/chartsA.js' ;

  console.log(commonUtils.randomString(10));

  export default {
    name: "Entrance",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        date_time: new Date().toUTCString(),
        headPortrait: head_portrait,
        classificationSrc: classification_src
      }
    },
    mounted() {

      this.setEcharts();

    },
    methods: {
      setEcharts() {
        let echarts = this.$echarts;
        // 基于准备好的dom，初始化echarts实例
        // 绘制图表
        echarts.init(document.getElementById('main_chart')).setOption(chartsA.option.aData);
        echarts.init(document.getElementById('main_chart_new')).setOption(chartsA.option.bData);
      },
      openRouter(path) {
        let router = this.$router;
        let obj = {path: path};
        router.push(obj);
      }
    }
  }
</script>

<style scoped>
  .login-background {
    /*background: linear-gradient(-180deg, #dcf2e6 0%, #ffffff 100%);*/
    width: 100%;
    height: 100%; /**宽高100%是为了图片铺满屏幕 */
    z-index: -1;
    position: absolute;
  }

  .is-selected {
    color: #1989FA;
  }

  #particles-js {
    width: 100%;
    height: calc(100% - 100px);
    position: absolute;
  }
</style>

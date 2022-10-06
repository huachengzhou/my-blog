<template>
  <div>
    <el-image :src="headPortrait"></el-image>
    <el-image v-if="myQRCodeImage" class="myQRCodeImage"
               :src="myQRCodeImage"/>
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
  </div>
</template>

<script>

  let QRCode = require('qrcode');
  import img_a1 from "@/assets/images/20221005121843.jpg";

  export default {
    name: "MyHome",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        date_time: new Date().toUTCString(),
        headPortrait: img_a1,
        myQRCodeImage: ""
      }
    },
    mounted() {
      //载入后
      this.openQRCode() ;
    },
    methods:{
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

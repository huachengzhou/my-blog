<template>
  <div>
    <el-image :src="headPortrait"></el-image>

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

  import img_a1 from "@/assets/images/20221005121843.jpg";

  export default {
    name: "MyHome",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        date_time: new Date().toUTCString(),
        headPortrait: img_a1
      }
    }
  }
</script>

<style scoped>

</style>

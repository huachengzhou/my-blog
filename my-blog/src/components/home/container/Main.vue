<template>
  <div>
    <!--<el-button :plain="true" @click="openRouter('/main/classification1')">切换到 分类数据1</el-button>-->
    <!--<el-button :plain="true" @click="openRouter('/main/classification2')">切换到 分类数据2</el-button>-->
    <router-view/>
  </div>
</template>

<script>

  // import router from '@/router/index';
  // console.log(router) ;

  export default {
    name: "Main",
    methods: {
      openRouter(path) {
        let router = this.$router;
        let obj = {path: path};
        // console.log(this.$commonUtils) ;
        // console.log(this.$commonKey) ;
        router.push(obj);
      }
    },
    mounted() {
      //载入后
    }
  }
</script>

<style scoped>

</style>

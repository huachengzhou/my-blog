<template>
  <div id="app">
    <img src="./assets/logo.png">

    <el-button :plain="true" @click="openRouter('/')">切换到 home</el-button>
    <el-button :plain="true" @click="openRouter('/helloWorld')">切换到 helloWorld</el-button>

    <router-view/>
    <router-view  name="other"/>
    <router-view  name="left"/>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

        routerName: '',

      }
    },
    methods: {
      openRouter(path, name) {
        let router = this.$router;
        let obj = {path: path};
        if (name) {
          // obj.name = name;
          this.routerName = name;
        } else {
          this.routerName = '';
        }
        console.log(obj) ;
        router.push(obj);
      }
    },
    mounted() {
      //载入后
      // this.$router.push({path:"/"});

      this.$axios.get('https://www.runoob.com/try/ajax/json_demo.json')
        .then(response => (this.info = response.data.sites))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });

      this.$axios.post('https://www.runoob.com/try/ajax/demo_axios_post.php')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<template>
  <el-container>

    <el-header>
      <router-view name="header"/>
    </el-header>

    <el-container style="margin-top:50px;">
      <el-aside width="200px">
        <router-view name="aside"/>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

    <el-footer>
      <router-view name="footer"/>
    </el-footer>
  </el-container>
</template>

<script>

  export default {
    name: "Home",
    mounted() {
      //载入后
      // this.$router.push({path: "/container"});
    }
  }

</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    /*border: 1px solid #ccc;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  /*.el-aside {*/
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
  /*}*/

  /*.el-main {*/
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  /*}*/

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<template>
  <div>
    <el-empty description="数据分类展示"></el-empty>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        date_time: new Date().toUTCString(),
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-card shadow="always">
      首页 - Wiki
      Copyright © 2011-2022 iteam. Current version is 2.106.3. {{date_time}}
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        date_time: new Date().toUTCString(),
      }
    },
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-row :gutter="10">
      <el-col :sm="12" :md="12">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>top</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :sm="12" :md="12">
        <div>

        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>

</style>

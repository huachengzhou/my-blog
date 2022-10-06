<template>
  <div>

    <el-menu>
      <el-submenu :index="index_+1" :key="index_" v-for="(itemGroups, index_) in stats_gov_cn_list">
        <template slot="title"><i class="el-icon-menu"></i>{{itemGroups.title}}</template>
        <el-menu-item-group :key="dataIndex" v-for="(dataList, dataIndex) in itemGroups.dataList">
          <template slot="title">{{dataList.groupTitle}}</template>
          <el-menu-item @click.native="select(item)" :index="getIndexString(index_, dataIndex, itemGroups,index)"
                        :key="index"
                        v-for="(item, index) in dataList.itemList">{{item.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-button @click="$router.push({path:'/'})" type="primary" round icon="el-icon-top">
        回到首页
      </el-button>
    </el-menu>


  </div>
</template>

<script>

  import * as commonUtils from '@/commonJs/untils.js' ;
  import * as meanData from '@/assets/datas/meanData.js' ;


  export default {
    name: "Aside",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        stats_gov_cn_list: meanData.stats_gov_cn
      }
    },
    methods: {
      select(item) {
        let router = this.$router;
        let obj = {path: '/main/' + item.id};
        router.push(obj);
      },
      getIndexString(index_, dataIndex, itemGroups, indexValue) {
        let arr = [];
        arr.push(index_);
        let index = 1 + indexValue;
        for (let i = 0; i < itemGroups.dataList.length; i++) {
          let obj = itemGroups.dataList[i];
          if (dataIndex > i) {
            break;
          }
          index += obj.itemList.length;
        }
        arr.push(index);
        return arr.join("-");
      }
    }
  }
</script>

<style scoped>

</style>

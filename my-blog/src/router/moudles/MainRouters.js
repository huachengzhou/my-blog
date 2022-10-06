import * as meanData from '@/assets/datas/meanData.js' ;

let mainRouters = [

];


if (meanData.stats_gov_cn) {
  if (meanData.stats_gov_cn.length > 0) {
    meanData.stats_gov_cn.forEach(itemGroups => {
      itemGroups.dataList.forEach(dataList => {
        dataList.itemList.forEach(item => {
          mainRouters.push({
            path: '/main/' + item.id,
            name: item.title,
            component: resolve => require(['@/components/view/' + item.id], resolve)
          })
        });
      });
    });
  }
}


export default mainRouters;

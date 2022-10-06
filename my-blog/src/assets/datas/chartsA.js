import * as meanData from '@/assets/datas/meanData.js' ;


let options = {};


let aData_a = [];
let aData_b = [];
if (meanData.stats_gov_cn) {
  if (meanData.stats_gov_cn.length > 0) {
    meanData.stats_gov_cn.forEach(itemGroups => {
      let indexCount = 0;
      itemGroups.dataList.forEach(dataList => {
        indexCount += dataList.itemList.length;
      });
      aData_a.push(itemGroups.title);
      aData_b.push(indexCount);
    });
  }
}

options.aData = {
  title: {
    text: '菜单统计数量'
  },
  tooltip: {},
  xAxis: {
    data: aData_a
  },
  yAxis: {},
  series: [
    {
      name: '数量',
      type: 'bar',
      data: aData_b
    }
  ]
};

options.bData = {
  legend: {},
  tooltip: {},
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
      {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
      {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
      {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
};


export {options as option} ;

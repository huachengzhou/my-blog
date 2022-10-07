let statsGov = [];

let group_1 = {groupTitle: "国家统计局", itemList: [{id: "ttz8wB46aJ", title: "人口数据"}, {id: "k5b4h2swabJ", title: "粮食数据"}]};

let group_2 = {groupTitle: "成都政府", itemList: [{id: "eY4jHnDjDs", title: "2022年8月成都统计月报"}]};

let group_3 = {groupTitle: "教育部", itemList: [{id: "dXPe7DD8mG", title: "教育部机关司局和直属事业单位信息"}]};


let america_group1 = {
  groupTitle: "新浪美国",
  itemList: [{id: "pjkhzz8mcb", title: "美国基本指标2018-2019"},
    {id: "eFJ7GmBhym", title: "经济政策与外债"},
    {id: "DXXNK8FZD7", title: "世界股市交易周转率2012-2021"},
  ]
};


statsGov.push({title: "中国", dataList: [group_1, group_2 ,group_3]});
statsGov.push({title: "联合国", dataList: []});
statsGov.push({title: "美国", dataList: [america_group1]});
statsGov.push({title: "国际货币基金组织", dataList: []});
statsGov.push({title: "世界银行", dataList: []});
statsGov.push({title: "国际清算银行", dataList: []});


export {statsGov as stats_gov_cn} ;

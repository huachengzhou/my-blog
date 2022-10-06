let statsGov = [];

let group_1 = {groupTitle: "国家统计局", itemList: [{id: "ttz8wB46aJ", title: "人口数据"}, {id: "k5b4h2swabJ", title: "粮食数据"}]};

let group_2 = {groupTitle: "成都政府", itemList: [{id:"eY4jHnDjDs",title:"2021年度-收入支出决算总表"}]};

statsGov.push({title: "中国", dataList: [group_1, group_2]});
statsGov.push({title: "联合国", dataList: []});
statsGov.push({title: "美国", dataList: []});
statsGov.push({title: "国际货币基金组织", dataList: []});
statsGov.push({title: "世界银行", dataList: []});
statsGov.push({title: "国际清算银行", dataList: []});


export {statsGov as stats_gov_cn} ;

       $(function() {
var xData = [],
    yData = [];

for(var i = 0; i <= 1; i += 0.1) {
    xData.push(roundFractional(i, 1));
    yData.push(roundFractional(h(i), 2));
    
}
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
function h(p) {
    return -1 * (plog(p) + plog(1 - p));
}


//使用ECharts进行初始化
var myChart = echarts.init($('.main').get(0));

//配置参数
var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      smooth: 'true',
      data: yData
    }]
};
myChart.setOption(option);

function plog(p) {
    return (p === 0)? 0 : p * Math.log2(p);
}
});
$(function(){

var data = [
    ['login_name', '登录名', 'C(9)', 'N', 'Y', ''],
    ['password', '密码', 'C(9)', 'N', 'N', ''],
    ['chinese_name', '中文名', 'C(10)', 'N', 'N', ''],
    ['english_name', '英文名', 'C(10)', 'Y', 'N', ''],
    ['gender', '性别', 'C(1)', 'Y', 'N', ''],
    ['address', '家庭住址', 'C(100)', 'Y', 'N', ''],
    ['mobile', '联系电话', 'C(15)', 'Y', 'N', ''],
    ['comment', '备注', 'C(100)', 'Y', 'N', '']
  ];
var container = document.getElementById('example');
var hot = new Handsontable(container, {
  data: data,
   contextMenu: true,          
    manualRowResize : true,      
    manualColumnResize : true,  
    rowHeaders: true,
    //colHeaders: true
    colHeaders: [
      '字段',
      '说明',
      '数据类型',
      '允许为空',
      '主键',
      '备注'
    ]
});





});


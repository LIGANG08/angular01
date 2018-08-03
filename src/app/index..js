(function () {
  'use strict';
//testDev是模拟服务器模块名，要依赖实际项目的模块名，还有模拟服务器模块ngMockE2E
angular.module('testDev',['test','ngMockE2E'])
  .run(function($httpBackend){
//run为了服务器运动的一个方法，$httpBackend为内置参数用于设置当用户请求某种数据时，模拟服务器返回某种数据
//
    var users = [{
      id:1,
      name:'小红'
    },{
      id:2,
      name:'小明',
    },{
      id:3,
      name:'小黄',
    }];
//当用户即实际开发模块请求路径/文件未'/test'时，返回users数据；
    $httpBackend.whenGET('/test').respond(users);
//当用页面使用路由时，模拟服务器会屏蔽跳转文件,采用下面语句会让后轴为html的文件识别到。
//$httpBackend.whenGET(/html/).passThrough();
  })

//index.js文件
//test为实际项目的模块名
angular.module('test',[])
  .controller('tc',function($scope,$http){
    var ctrl=this;//防止误用
    ctrl.getUsers=function(){
      $http.get('/test').then(function(respond){//用get的方法向模拟路径'/test'请求获取后台数据
//请求成功：respond.data返回后台的数据
        $scope.users=respond.data;
      },function(error){
//请求失败 会执行该函数。
      })
    };
    ctrl.getUsers();//调用该方法。
  })
})();

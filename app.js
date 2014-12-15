var app = angular.module('app', ['ui.router']);

app
		.config(
				function($stateProvider, $urlRouterProvider) {
		
					$stateProvider.state("nav", {
						url : '/nav',
						'abstract' : true,
						templateUrl : 'dashboard.html',
						controller : 'DashboardCtrl'
					}).state("nav.nav1", {
						url : '/nav1',
						templateUrl : 'nav1.html',
						controller : 'Nav1Ctrl'
					}).state("nav.nav2", {
						url : '/nav2',
						templateUrl : 'nav2.html',
						controller : 'Nav2Ctrl'
					}).state("nav.nav3",{
						url : '/nav3',
						templateUrl : 'nav3.html',
						controller : 'Nav3Ctrl'
					});

					$urlRouterProvider.when('/nav',
							'/nav/nav1');
					$urlRouterProvider.otherwise('/nav');
			}).run(function($rootScope, $location,$state) {
				//$location.url('/nav');
			});
				
app.factory('_', function() {
  return window._; 
});				
				
app.controller('MainCtrl', function($scope,$log) {
	$log.info("hello");
	
});

app.controller('DashboardCtrl', function($scope,$log,$location,$state,_) {

	$log.info("Dashboard Controller");
	$scope.navList=[
		{ name : "Nav1",url:"nav1",
		  children :[
		  { name : "subNav1",url:"subnav1"},
		  { name : "subNav2",url:"subnav2"}
		  ]
		},
		{ name : "Nav2",url:"nav2",
		  children :[
		  { name : "subNav1",url:"subnav1"},
		  { name : "subNav2",url:"subnav2"}
		  ]
		},
		{ name : "Nav3",url:"nav3",
		  children :[
		  { name : "subNav1",url:"subnav1"},
		  { name : "subNav2",url:"subnav2"}
		  ]
		}
			
	];
	$log.info("state " +$state.current.name);
	$log.info("path " +$location.path());
	
	var lastChar = $state.current.name.substring($state.current.name.length, $state.current.name.length - 1);
	
	if(lastChar>0){
		$scope.navSelected = lastChar-1; 
	}else{
		$scope.navSelected = 0; 
	}
	
	$scope.navClick= function(item,child) {
		if(item){
			$log.info("clicked "+item.name);
			$location.url('/nav/'+item.url);
	   }
	   if(child){
			$log.info("clicked "+child.name);
	   }
	   
	}
});

app.controller('Nav1Ctrl', function($scope,$log) {
	$log.info("Nav1 Controller");
});

app.controller('Nav2Ctrl', function($scope,$log) {
	$log.info("Nav2 Controller");
});

app.controller('Nav3Ctrl', function($scope,$log) {
	$log.info("Nav3 Controller");
});

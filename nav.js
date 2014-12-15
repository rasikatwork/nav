app.directive('nav', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude:true,
		templateUrl: 'nav.html',
		scope: {
			items: "=",
			callback: "=",
			selected: "@",
			childSelected: "@"
		},
		controller: function($scope, $log ) {

			if (!$scope.selected) {
				$scope.selected = 0;
			}
			if (!$scope.childSelected) {
				$scope.childSelected = 0;
			}
			
			$scope.navClick = function(index,item) {
				//$log.debug("item  " + item.name);
				$scope.selected = index;
				$scope.childSelected = 0;
				if($scope.callback) {
					$scope.callback(item); 
				}
				
			}
			
			$scope.subNavClick = function(index,item,child) {
				//$log.debug("SubNav click " + child.name);
				$scope.childSelected = index;
				if($scope.callback) {
					$scope.callback(item,child); 
				}

			}
			
			$scope.itemClass = function(index) {
				var r = "item link";
				if ($scope.selected == index) {
					r += " selected";
				}
				
				if(!$scope.selected && index==0) {
					r += " selected";
				}
				return r;
			}
			
			$scope.childSelectedClass = function(index,last) {
				var r = "";
				if ($scope.childSelected == index) {
					r += " childSelected";
				}
				if(last){
					r += " lastChild";
				}
				
				return r;
			}
		}
	}
})

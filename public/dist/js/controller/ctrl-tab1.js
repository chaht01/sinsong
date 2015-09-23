'use strict';

angular.module('certApp').controller('Tab1Ctrl', function($scope){
	$scope.todos =  [
		{text:'모르겟다..', done:false},
		{text:'모르겟다..2', done:false}
	]

	$scope.submit = function(){
		if($scope.text){
			$scope.todos.push({text:$scope.text,done:false});
			$scope.text = '';
		}
	}

	$scope.$watch('text', function(){
		if($scope.text && $scope.text.slice(-1) == '@'){
			console.log('ddd')
		}
	})
})
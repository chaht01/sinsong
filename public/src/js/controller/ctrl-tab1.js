'use strict';

function strip(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
function insertNodeAtCursor(node) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            sel.getRangeAt(0).insertNode(node);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        html = (node.nodeType == 3) ? node.data : node.outerHTML;
        range.pasteHTML(html);
    }
}
function insertHtmlAtCursor(html) {
    var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = window.getSelection().getRangeAt(0);
            node = range.createContextualFragment(html);
            range.insertNode(node);
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().pasteHTML(html);
    }
}
angular.module('certApp').controller('Tab1Ctrl', function($scope,$sce,$compile){
	$scope.todos =  [];

	$scope.submit = function(){
		if($scope.text){
			$scope.todos.push({text:$scope.text,trustText: $sce.trustAsHtml($scope.text),done:false});
			$scope.text = '';
		}
	}


    $scope.focusFlag = false;
    $scope.user = {
        typed:'',
        focusFlag:false
    };
    $scope.users = [];
    var hashInput, hashInputTyped;
    angular.element("#note").bind('keydown', 'shift+2', function(event){
        if(!$scope.user.focusFlag) {
            hashInput = angular.element('<input ng-model="user.typed" class="hash-input"ng-blur="blurFocus()" autofocus="true" ng-submit="">');
            hashInput.appendTo(angular.element('#note')).autoGrowInput({minWidth: 10, comfortZone: 10}).focus();
            $scope.user.focusFlag = true;
            $compile(hashInput)($scope);
        }
    })

    $scope.$watch('user.typed',function(){
        if($scope.user.focusFlag && $scope.user.typed.length==0){
            $scope.destroyHash()
        }
    })
    $scope.blurFocus = function(){
        $scope.user.focusFlag = false;
        $scope.users.push($scope.user);
        hashInputTyped = angular.element('<input value='+$scope.users[$scope.users.length-1].typed.substring(1)+' class="hash-input readonly" readonly>');
        hashInput.replaceWith(hashInputTyped);
        hashInputTyped.autoGrowInput({minWidth: 10, comfortZone: 0});
        $scope.user = {
            typed:'',
            focusFlag:false
        };

        hashInputTyped.next('span').remove();
        hashInputTyped.next('span').remove();
    }

    $scope.destroyHash = function(){
        hashInput.detach()
    }
    angular.element("#note").bind('keydown','alt+s',function(event){
        $scope.submit();
        event.preventDefault();
    })
})

app.directive('integerInput', function() {
	return {
		restrict: 'E',
		templateUrl: '/numberInput/numberInput.html',
		link: function(scope, element) {
			element.on('keypress', function(event) {
				var keyNum = event.which;
				if((keyNum > 57 || keyNum < 48) && keyNum !== 13) {
					event.preventDefault();
				}
			})		
		}
	}
})
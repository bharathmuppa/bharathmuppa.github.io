// app.js

// define our application and pull in ngRoute and ngAnimate

function increaseSize(x) {
	x.style.height = "95px";
	x.style.width = "85px";
};
function decreaseSize(x) {
	x.style.height = "85px";
	x.style.width = "85px";
}

for ( i = 0; i < document.getElementsByClassName("bat").length; i++) {
	document.getElementsByClassName("bat")[i].style.display = "none";
}

var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl : 'page-home.html',
		controller : 'homeController'
	})

	// about page
	.when('/about', {
		templateUrl : 'page-about.html',
		controller : 'aboutController'
	})

	// contact page
	.when('/contact', {
		templateUrl : 'page-contact.html',
		controller : 'contactController'
	});

});

// CONTROLLERS ============================================
// home page controller
animateApp.controller('homeController', function($scope) {
	$scope.pageClass = 'page-home';

});
animateApp.controller('mainController', function($scope) {
	var mcc = this;
	mcc.linkFlag = false;
	mcc.unlock = function(x) {
		if (event.target.getAttribute("src") === "img/lock.ico") {
			event.target.src = "img/unlock.ico";
 			mcc.linkFlag = true;
		} else {
			event.target.src = "img/lock.ico";
			mcc.linkFlag = false;

		}
	};

});
// about page controller
animateApp.controller('aboutController', function($scope) {
	$scope.pageClass = 'page-about';
});

// contact page controller
animateApp.controller('contactController', function($scope) {
	$scope.pageClass = 'page-contact';
});

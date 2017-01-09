// app.js


angular.module('battyApp', ['ngRoute']).config(configFn);

configFn.$injcetor = ['$routeProvider'];

function configFn($routeProvider) {

    $routeProvider.when('/', {
            templateUrl: 'Home.html',
            controller: 'homeController'
        }).when('/me', {
            templateUrl: 'Me.html',
            controller: 'meController'
        })
        .when('/works', {
            templateUrl: 'Work.html',
            controller: 'workController'
        })
        .when('/course', {
            templateUrl: 'Musings.html',
            controller: 'musingsController'
        });

}

// CONTROLLERS ============================================

angular.module('battyApp').controller('mainController', function($scope, $location) {
    var mcc = this;
    mcc.linkFlag = false;

    angular.element("body").removeClass("yMenu").addClass("nMenu");
    mcc.changeTab = function(oEvent) {
        if (event.target.getAttribute("data-link")) {
            $location.path('/' + event.target.getAttribute("data-link"));
            $(event.currentTarget).find('a').removeClass('active');
            $(event.target).addClass("active");
        }

    };
    mcc.toggleMenu = function(oEvent) {
        if (angular.element("#menuIconId").css("display") === "none") {
            angular.element("#crossIconId").hide(300);
            angular.element("#menuIconId").show(300);
            angular.element(".menuItems").hide(1400);

        } else {
            angular.element("#crossIconId").show(300);
            angular.element("#menuIconId").hide(300);
            angular.element(".menuItems").show(1500);
        }
    };
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
// home page controller
angular.module('battyApp').controller('meController', function($scope) {

    angular.element("body").removeClass("nMenu").addClass("yMenu");
});
// home page controller
angular.module('battyApp').controller('homeController', function($scope, $interval) {
    angular.element("body").removeClass("yMenu").addClass("nMenu");


});
// about page controller
angular.module('battyApp').controller('workController', function($scope) {
    angular.element("body").removeClass("nMenu").addClass("yMenu");
});

// contact page controller
angular.module('battyApp').controller('musingsController', function($scope) {
    angular.element("body").removeClass("nMenu").addClass("yMenu");
});

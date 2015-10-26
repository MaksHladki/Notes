app.controller('mainController', ['$scope', '$translate', function ($scope, $translate) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

}]);
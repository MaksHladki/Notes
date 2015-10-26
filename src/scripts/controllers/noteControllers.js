
app.controller('noteListController', ['$scope', '$location', 'dataService', 'dataCache', function ($scope, $location, dataService, dataCache) {

    $scope.editNote = function (id) {
        $location.path('/note-edit/' + id);
    };

    $scope.detailNote = function (id) {
        $location.path('/note-detail/' + id);
    };

    $scope.deleteNote = function (id) {
        dataService.delete(id).then(function (result) {
            if (result) {
                $scope.notes.splice(IndexOfNotes($scope.notes, id), 1);
                bootbox.alert("Note has been deleted");
            }
        });
    };

    $scope.notes = dataCache.get('notes');
    if (!$scope.notes) {
        dataService.get().then(function (data) {
            $scope.notes = data;
            //dataCache.put('notes', data);
        });
    }
}]);


app.controller('noteDetailController', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {

    $scope.note = {};
    dataService.getById($routeParams.id).then(function (data) {
        $scope.note = data;
    });

    $scope.cancel = function () {
        $location.path('/note-list');
    };

    $scope.editNote = function (id) {
        $location.path('/note-edit/' + id);
    };

}]);


app.controller('noteCreateController', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
    $scope.cancel = function () {
        $location.path('/note-list');
    };

    $scope.saveNote = function (note, noteForm) {
        if (noteForm.$valid) {
            dataService.add(note).then(function (data) {
                if (data) {
                    bootbox.alert("Note has been saved", function () {
                        $scope.$safeApply(function () {
                            $location.path('/note-list');
                        });
                    });
                }
            });
        }
    };
}]);


app.controller('noteEditController', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {

    $scope.note = {};
    dataService.getById($routeParams.id).then(function (data) {
        $scope.note = data;
    });

    $scope.cancel = function () {
        $location.path('/note-list');
    };

    $scope.refreshNote = function (note, noteForm) {
        if (noteForm.$valid) {
            dataService.refresh(note).then(function (data) {
                if (data) {
                    bootbox.alert("Note has been refreshed", function () {
                        $scope.$safeApply(function () {
                            $location.path('/note-list');
                        });
                    });
                }
            });
        }
    };

}]);
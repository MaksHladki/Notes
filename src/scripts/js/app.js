
var app = angular.module("noteApp", ["ngRoute", "Scope.safeApply", "pascalprecht.translate"]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/note-list', { templateUrl: 'templates/note-list.html', controller: 'noteListController' });
    $routeProvider.when('/note-detail/:id', { templateUrl: 'templates/note-detail.html', controller: 'noteDetailController' });
    $routeProvider.when('/note-edit/:id', { templateUrl: 'templates/note-edit.html', controller: 'noteEditController' });
    $routeProvider.when('/note-create', { templateUrl: 'templates/note-create.html', controller: 'noteCreateController' });
    $routeProvider.otherwise({ redirectTo: '/note-list' });
}]);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en',
        {
            'AppTitle': 'Notes Application',
            'Notes': 'Notes',
            'Create': 'Create',
            'Id': 'Id',
            'Title': 'Title',
            'Details': 'Details',
            'Edit': 'Edit',
            'Delete': 'Delete',
            'Save': 'Save',
            'Cancel': 'Cancel',
            'Russian': 'Russian',
            'English': 'English',
            'Language': 'Language'
        }
    );

    $translateProvider.translations('ru',
        {
            'AppTitle': 'Приложение Заметки',
            'Notes': 'Заметки',
            'Create': 'Создать',
            'Id': 'Ид',
            'Title': 'Заголовок',
            'Details': 'Подробнее',
            'Edit': 'Редактировать',
            'Delete': 'Удалить',
            'Save': 'Сохранить',
            'Cancel': 'Отменить',
            'Russian': 'Русский',
            'English': 'Английский',
            'Language': 'Язык'
        }
    );

    $translateProvider.preferredLanguage('ru');
}]);

app.directive('loading',   ['$http' ,function ($http)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    elm.show();
                }else{
                    elm.hide();
                }
            });
        }
    };

}]);

function IsNoteExists(notes, id) {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === id) return true;
    }
    return false;
}

function IndexOfNotes(notes, id) {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === id) return i;
    }
    return -1;
}
app.factory('dataService', ['$http', function ($http) {

    var serverUrl = 'http://private-9aad-note10.apiary-mock.com/notes';
    var dataService = {};

    dataService.get = function () {
        var promise = $http.get(serverUrl).then(function (response) {
            return response.data;
        }, function (response) {
            console.log('error retrieving information from server' + JSON.stringify(response));
        });
        return promise;
    };

    dataService.add = function (note) {
        var promise = $http.post(serverUrl, note).then(function (response) {
            return response.data;
        }, function (response) {
            console.log('error retrieving information from server' + JSON.stringify(response));
        });
        return promise;
    };

    dataService.delete = function (id) {
        var promise = $http.delete(serverUrl + '/' + id).then(function (response) {
            return true;
        }, function (response) {
            console.log('error retrieving information from server' + JSON.stringify(response));
        });
        return promise;
    };

    dataService.getById = function (id) {
        var promise = $http.get(serverUrl + '/' + id).then(function (response) {
            return response.data;
        }, function (response) {
            console.log('error retrieving information from server' + JSON.stringify(response));
        });
        return promise;
    };

    dataService.refresh = function (note) {
        var promise = $http.put(serverUrl + '/' + note.id, note).then(function (response) {
            return response.data;
        }, function (response) {
            console.log('error retrieving information from server' + JSON.stringify(response));
        });
        return promise;
    };

    return dataService;
}]);


app.factory('dataCache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('dataCache', {});
}]);


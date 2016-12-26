angular.module('myApp', []).controller('personCtrl', ($scope) => {
    $scope.lastName = 'annali';

    $scope.names = [
        {
            name: 'annali',
            country: 'china'
        },
        {
            name: 'bobo',
            country: 'usa'
        }
    ];
});


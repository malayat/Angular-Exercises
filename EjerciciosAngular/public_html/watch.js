var app = angular.module("app", []);

app.controller("Controlador", ['$scope', '$log', function ($scope, $log) {
        $scope.numero = 5;


//    $scope.$watch(function (scope){
//        return scope.numero;
//    },

//      watch("variable a monitorear", funcion(param nuevo, param viejo))
        $scope.$watch("numero", function (nuevo, viejo) {
            if (nuevo > 5) {
                $scope.mensaje = "Aprobado";
            } else {
                $scope.mensaje = "Reprobado";
            }
        });
    }]);



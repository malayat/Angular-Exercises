var app = angular.module("app", []);

app.controller("Controlador", ['$scope', function ($scope) {
        $scope.fecha = new Date();
        $scope.moneda = 32.49587106;
        $scope.provincias = [
            {
                codProv: "02",
                nomProv: "Pichincha",
                canton : "Quito",
                habitantes : 2334021
            },
            {
                codProv: "04",
                nomProv: "Guayas",
                canton : "Guayaquil",
                habitantes : 43129543
            },
            {
                codProv : "07",
                nomProv : "Azuay",
                canton : "Cuenca",
                habitantes : 1765423
            },
            {
                codProv: "05",
                nomProv: "Esmeraldas",
                canton : "Esmeraldas",
                habitantes : 547695
            }
        ];
        
        $scope.filtroHabitantes = function (value) {
            if(value.habitantes > 100000) {
                return true;
            }
            return false;
        };
        
        $scope.textoFiltro = "";

    }]);



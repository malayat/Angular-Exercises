var app = angular.module("app", []);

//Se crea una constante cuyo valor es un String
app.constant("miServicioConstante", "Hola Mundo!");

//Se crea una constante cuyo valor es un Objeto con los metodos sumar y restar
app.constant("matematicas_simples", {
    sumar: function (a, b) {
        return a + b;
    },
    resta: function (a, b) {
        return a - b;
    }
});

app.constant("idioma_es", "es_EC");

//Se crea una constante cuyo valor es un numero
app.constant("radio", 10);

//Se crea una constante cuyo valor es una funcion
app.constant("area", function (radio) {
    return 3.1416 * radio * radio;
});

//Se inyectan todas las constantes en el controlador
app.controller("PruebaController", 
['$scope', 'matematicas_simples', 'idioma_es','radio','area', 
    function ($scope, matematicas_simples, idioma_es, radio, area) {
        $scope.idioma = idioma_es;
        $scope.suma = matematicas_simples.sumar(4,5);
        $scope.area = area(radio);
    }]);
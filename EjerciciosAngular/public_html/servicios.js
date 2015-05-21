var app = angular.module("app", []);

app.value("tamanioInicialRectangulo", {
    ancho : 9,
    alto : 3
});

function Rentagulo(tamanioInicial) {
    this.ancho = tamanioInicial.ancho;
    this.alto = tamanioInicial.alto;

    this.setAncho = function (ancho) {
        this.ancho = ancho;
    };

    this.setAlto = function (alto) {
        this.alto = alto;
    };

    this.getArea = function () {
        return this.ancho * this.alto;
    };
};

//app.service("rectangulo", Rentagulo);
app.service("rectangulo", ["tamanioInicialRectangulo", Rentagulo]);

app.controller('PruebaController', ['$scope', 'rectangulo', function ($scope, rectangulo) {
        $scope.areaRec = rectangulo.getArea();
    }]);
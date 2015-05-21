var app = angular.module("app",[]);

app.value("tamanioInicialRec",{
    ancho : 2,
    alto : 9
});

function Rectangulo(tamanioInicial) {
  this.ancho = tamanioInicial.ancho;
  this.alto = tamanioInicial.alto;
  
  this.getArea = function(){
      return this.ancho * this.alto;
  };
};

//se define rectangulo y se inyecta tamanioInicialRec a la funcion
app.factory("rectangulo",["tamanioInicialRec", function (tamanioInicialRec){
        var rectangulo = new Rectangulo(tamanioInicialRec);
        return rectangulo;
}]);

app.controller("PruebaController",['$scope', 'rectangulo', function ($scope, rectangulo){
        $scope.area = rectangulo.getArea();
}]);

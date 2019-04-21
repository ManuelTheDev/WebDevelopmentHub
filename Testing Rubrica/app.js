var app = angular.module('app', [])

app.controller('myController', function($scope){
    $scope.listaCriterios = [
        {
            nombre: 'Realizó el diagrama de clases correctamente',
            puntaje: '',
            puntajeMaximo: '10'
        },
        {
            nombre: 'Realizó la arquitectura de la aplicación correctamente',
            puntaje: '',
            puntajeMaximo: '5'
        },
        {
            nombre: 'Cumple con los estándares de programación',
            puntaje: '',
            puntajeMaximo: '5'
        }
    ]

    $scope.agregarCriterio = function(){
        $scope.listaCriterios.push({
            nombre: $scope.newCriterio.nombre,
            puntaje: '',
            puntajeMaximo: $scope.newCriterio.puntajeMaximo
        })

        $scope.newCriterio.nombre = ""
        $scope.newCriterio.puntajeMaximo = ""
    }



    $scope.nombre = "Angular is working"
})
var app = angular.module('app', [])

app.controller('myController', function($scope){
    //Los criterios estan agrupados por familias
    //Cada familia contiene un arreglo de criterios

    $scope.listaFamiliaCriterios = []



    $scope.listaCriterios = [
        {
            nombre: 'Realizó el diagrama de clases correctamente',
            puntajeAsignado: '2',
            puntajeMaximo: '10',
            comentario: 'Criterio 1'
        },
        {
            nombre: 'Realizó la arquitectura de la aplicación correctamente',
            puntajeAsignado: '1',
            puntajeMaximo: '5',
            comentario: 'Criterio 2'
        },
        {
            nombre: 'Cumple con los estándares de programación',
            puntajeAsignado: '5',
            puntajeMaximo: '5',
            comentario: 'Criterio 3'
        }
    ]

    $scope.agregarCriterio = function(){
        $scope.listaCriterios.push({
            nombre: $scope.newCriterio.nombre,
            puntajeAsignado: '',
            puntajeMaximo: $scope.newCriterio.puntajeMaximo
        })

        $scope.newCriterio.nombre = ""
        $scope.newCriterio.puntajeMaximo = ""
    }

    $scope.registrarCalificacion = function(){
        console.log('estoy registrando')
    }

    $scope.mostrarConfirmacion = function(){
        window.alert('Se ha validado la corrección de la rúbrica correctamente')
    }



    $scope.nombre = "Angular is working"
})
function controllerVacantes(){
	var apvav = angular.module('AdmonPersAdmitivaVacantes',[])
	apvav.controller('vacantesFijas',['$scope',function($scope){
		var administrativasFijasSolicitadas = [];
		var administrativasInterinasSolicitadas = [];
		var administrativasFijasAutorizadas = [];
		var administrativasFijasRechazadas

		$scope.showAdministrativasFijas = function(){
				$scope.solicitudesFijas = [
					{dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
					{dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
					{dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2}
				];
		}
		$scope.showAdministrativasFijas();
		$scope.showDocumentFijaAdministrativa = function(id){
			window.location = "documents/docEjample.pdf";
		}
		$scope.autorizarSolicitud = function(codigo){
			$("#autorizarSolicitud").modal();
			for(i in $scope.solicitudesFijas){
				if($scope.solicitudesFijas[i].codigo == codigo){
					$scope.solicitudesFijas.splice(i,1);
				}
			}
		}
		$scope.rechazarSolicitud = function(codigo){
			$("#autorizarSolicitud").modal();
			for(i in $scope.solicitudesFijas){
				if($scope.solicitudesFijas[i].codigo == codigo){
					$scope.solicitudesFijas.splice(i,1);
				}
			}
		}
	}])
}
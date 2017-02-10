function controllerVacantes(){
	var apvav = angular.module('AdmonPersAdmitivaVacantes',[])
	apvav.controller('vacantesFijas',['$scope',function($scope){

		/* Variables Globales
		*  Modulo para el encargado de vacantes
		*/

		//Solicitudes Administrativas Fijas
		$scope.administrativasFijasSolicitadas = [
			{dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
			{dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
			{dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2}
		];
		//Solicitudes Administrativas Interinas
		$scope.administrativasInterinasSolicitadas = [
			{dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
			{dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
			{dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2},
			{dependencia:"Recursos Humanos", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:3},
			{dependencia:"Mantenimiento", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:4}
		];
		//Solicitudes Autorizadas Administrativas Fijas
		$scope.administrativasFijasAutorizadas = [];

		//Solicitudes Autorizadas Administrativas Interinas
		$scope.administrativasInterinasAutorizadas = [];

		//Solicitudes Rechazadas Administrativas Fijas
		$scope.administrativasFijasRechazadas = [];

		//Solicitudes Rechazadas Administrativas Interinas
		$scope.administrativasInterinasRechazadas = [];

		$scope.showDocumentFijaAdministrativa = function(id){
			window.location = "documents/docEjample.pdf";
		}
		$scope.autorizarSolicitudAdministrativaFija = function(codigo){
			prompt("Pin para firma electronica: Autorizar Administrativa Fija");
			for(i in $scope.administrativasFijasSolicitadas){
				if($scope.administrativasFijasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasFijasSolicitadas[i];
					$scope.administrativasFijasSolicitadas.splice(i,1);
					$scope.administrativasFijasAutorizadas.push(datos);
					$("#autorizarSolicitud").modal();
				}
			}
		}
		$scope.autorizarSolicitudAdministrativaInterina = function(codigo){
			prompt("Pin para firma electronica: Autorizar Administrativa Interina");
			for(i in $scope.administrativasInterinasSolicitadas){
				if($scope.administrativasInterinasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasInterinasSolicitadas[i];
					$scope.administrativasInterinasSolicitadas.splice(i,1);
					$scope.administrativasInterinasAutorizadas.push(datos);
					$("#autorizarSolicitud").modal();
				}
			}
		}
		$scope.rechazarSolicitudAdministrativaFija = function(codigo){
			confirm("Esta seguro de rechazar la solicitud Administrativa Fija?");
			for(i in $scope.administrativasFijasSolicitadas){
				if($scope.administrativasFijasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasFijasSolicitadas[i];
					$scope.administrativasFijasSolicitadas.splice(i,1);
					$scope.administrativasFijasRechazadas.push(datos);
					$("#rechazarSolicitud").modal();
				}
			}
		}
		$scope.rechazarSolicitudAdministrativaInterina = function(codigo){
			confirm("Esta seguro de rechazar la solicitud Administrativa Interina?");
			for(i in $scope.administrativasInterinasSolicitadas){
				if($scope.administrativasInterinasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasInterinasSolicitadas[i];
					$scope.administrativasInterinasSolicitadas.splice(i,1);
					$scope.administrativasInterinasRechazadas.push(datos);
					$("#rechazarSolicitud").modal();
				}
			}
		}
	}])
}


/**
*	Controlador del modulo de Vacantes Administrativas Fijas
*/

function controllerVacantesFijasAdministrativas(){
	var apvav = angular.module('AdmonPersAdmitivaVacantesFijas',[])
	apvav.controller('vacantesFijasAdministrativas',['$scope',function($scope){

		/* Variables Globales
		*  Modulo para el encargado de vacantes
		*/
		var posicionFolio;
		//Solicitudes Administrativas Fijas
		$scope.administrativasFijasSolicitadas = [
			{fechaEnvio : "02-02-2017", dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
			{fechaEnvio : "02-02-2017", dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
			{fechaEnvio : "02-02-2017", dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2}
		];
		//Solicitudes Administrativas Interinas
		$scope.administrativasInterinasSolicitadas = [
			{fechaRecibido : "02-02-2017", dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
			{fechaRecibido : "02-02-2017", dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
			{fechaRecibido : "02-02-2017", dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2},
			{fechaRecibido : "02-02-2017", dependencia:"Recursos Humanos", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:3},
			{fechaRecibido : "02-02-2017", dependencia:"Mantenimiento", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:4}
		];

		//Folios Enviados Gerencia Unidad Administrativas Fijas
		$scope.administrativasFijasAutorizadas = [];

		//Solicitudes Autorizadas Administrativas Interinas
		$scope.administrativasInterinasAutorizadas = [];

		//Solicitudes Rechazadas Administrativas Fijas
		$scope.administrativasFijasRechazadas = [];

		//Solicitudes Rechazadas Administrativas Interinas
		$scope.administrativasInterinasRechazadas = [];

		// Perfil de un puesto
		$scope.perfilesUCPAS = [
			{escolaridad:"Pensum Cerrado de Ingenieria en Sistemas",experiencia:"Angular y J2EE", edad:25, examenes:"Certificado Javascript"}
		];
		// Elegibles Dotacion
		$scope.elegiblesDotacion = [
			{nombre:"Juan Carlos",familiaOJ:"Mario Cansinos", estudios:"8vo. Semestre Administracion", examenes:"Certificado Javascript"},
			{nombre:"Marcos Tax",familiaOJ:"No", estudios:"8vo. Semestre Ing. Civil", examenes:"Certificado Gestion de riezgos"},
			{nombre:"Maribel Lopez",familiaOJ:"Pedro Barreno", estudios:"10mo. Semestre Ing. Industrial", examenes:"Certificado Gestion de procesos"},
		];
		// Elegibles Desarrollo
		$scope.elegiblesDesarrollo = [
			{nombre:"Pedro Tzul",cargoActual:"Oficinista", familiaOJ:"Juan Carlos", denunciasRegimen:"No", examenes:"70 Puntos en administrativo"},
			{nombre:"Julio Jeremias",cargoActual:"Pintor", familiaOJ:"Luis Gonzalo", denunciasRegimen:"No", examenes:"80 Puntos en administrativo"},
			{nombre:"Micolas Orlando",cargoActual:"Musico", familiaOJ:"Lucas Leiws", denunciasRegimen:"No", examenes:"90 Puntos en administrativo"},		
		];

		//Solicitudes a UCPAS 
		$scope.solicitudPerfilUcpasAdministrativaFija = function(codigo){
			if (codigo == 0) {
				$("#perfilUCPASAdministrativaFija").modal();
			};
			if (codigo == 1) {
				$("#solicitudUCPASAdministrativaFija").modal();
			};
		}
		//Solicitudes a UDDI 
		$scope.solicitudCandidatosUDDI = function(codigo){
			if (codigo == 0) {
				prompt("No existen candidatos, Pin de firma electronica para solicitar a UDDI");
				$("#solicitudCandidatosUDDI").modal();
			};
			if (codigo >= 1) {
				posicionFolio = codigo;
				$("#candidatosUDDI").modal();
			};
		}
		$scope.GeFoEnvGerRRHH = function(){
			prompt("Pin para firma electronica: Enviar Gerencia Unidad");
			var dato = $scope.administrativasFijasSolicitadas[posicionFolio];
			$scope.administrativasFijasAutorizadas.push(dato);
			$scope.administrativasFijasSolicitadas.splice(posicionFolio,1);
			alert("Folio enviado a Gerencia de RRHH correctamente");
		}
		$scope.foliosAdministrativosFijosEnviados = function(id){
			window.location = "img/Folio.png";
		}
		$scope.acuerdoAdministrativosFijosEnviados = function(id){
			window.location = "img/lidatoCandidatos.png";
		}
		$scope.enviarNombramientoAdministrativoFijo = function(codigo){
			prompt("Pin para firma electronica: Enviar para transcripción...");
			for(i in $scope.administrativasInterinasSolicitadas){
				if($scope.administrativasInterinasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasInterinasSolicitadas[i];
					$scope.administrativasInterinasSolicitadas.splice(i,1);
					$scope.administrativasInterinasAutorizadas.push(datos);
				}
			}
			$("#enviarNombramientoAdministrativoFijoStatus").modal();
		}
		$scope.rechazarSolicitudAdministrativaFija = function(codigo){
			confirm("Esta seguro de rechazar la solicitud Administrativa Fija?");
			for(i in $scope.administrativasFijasSolicitadas){
				if($scope.administrativasFijasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasFijasSolicitadas[i];
					$scope.administrativasFijasSolicitadas.splice(i,1);
					$scope.administrativasFijasRechazadas.push(datos);
					$("#rechazarSolicitud").modal();
				}
			}
		}
		$scope.rechazarSolicitudAdministrativaInterina = function(codigo){
			confirm("Esta seguro de rechazar la solicitud Administrativa Interina?");
			for(i in $scope.administrativasInterinasSolicitadas){
				if($scope.administrativasInterinasSolicitadas[i].codigo == codigo){
					var datos = $scope.administrativasInterinasSolicitadas[i];
					$scope.administrativasInterinasSolicitadas.splice(i,1);
					$scope.administrativasInterinasRechazadas.push(datos);
					$("#rechazarSolicitud").modal();
				}
			}
		}
	}])	
}



/**
*	Controlador para el area de Gerencia Administrativa
*/

function startGerenciaAdministrativa(){
	var gerAdmitiva = angular.module("AdmonPersAdmitivaGerencia",[])
	gerAdmitiva.controller('gerenciaAdministrativa',['$scope',function($scope){
		// Variables Globales

		//Folios Administrativos Fijos
		$scope.administrativosFijosFolios = [
			{dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:0},
			{dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:1},
			{dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", codigo:2}
		];
		//Folios Administrativos Interino
		$scope.administrativosInterinosFolios = [
			{dependencia:"CIT Quetzaltenango", titular:"Carlos Batz", cargo:"Programador", motivo:"Licencia Examen", propuesta:"Pedro Tzul", tiempo:"2 meses", codigo:0},
			{dependencia:"CIT Guatemala", titular:"Pedro Gomez", cargo:"Servicios Criticos", motivo:"Licencia Examen", propuesta:"Pedro Tzul", tiempo:"2 meses", codigo:1},
			{dependencia:"Planta Electrica", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", tiempo:"2 meses", codigo:2},
			{dependencia:"Recursos Humanos", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", tiempo:"2 meses", codigo:3},
			{dependencia:"Mantenimiento", titular:"Carlos Batz", cargo:"Operario", motivo:"Licencia Examen", propuesta:"Pedro Tzul", tiempo:"2 meses", codigo:4}
		];
		// Folios Rechazados Interinos o Fijos 
		$scope.foliosAdministrativosFijosRechazados = [];

		//Folios Administrativos Fijos Enviados a Gerencia de RRHH
		$scope.administrativosFijosFoliosEnviados = [];

		//Folios Administrativos Interinos Enviados a Gerencia de RRHH
		$scope.administrativosInterinosFoliosEnviados = [];


		/*
		*		Folios Administrativos Fijos 
		*/
		$scope.verFolioFijoAdministrativo = function(id){
			window.location = "img/Folio.png";
		}
		$scope.VoBoFolioAdministrativoFijo = function(codigo){
			prompt("Pin Firma Electronica: Enviar a Gerencia de RRHH");
			for(var i in $scope.administrativosFijosFolios){
				if ($scope.administrativosFijosFolios[i].codigo == codigo) {
					var dato = $scope.administrativosFijosFolios[i];
					$scope.administrativosFijosFoliosEnviados.push(dato);
					$scope.administrativosFijosFolios.splice(i,1);
					$("#foliosEnviadosGerenciaRRHHStatus").modal();
				};
			}
		}
		$scope.rechazarFolioFijoAdministrativo = function(codigo){
			prompt("Comente porque rechazará el Folio Fijo Administrativo");
			for(var i in $scope.administrativosFijosFolios){
				if ($scope.administrativosFijosFolios[i].codigo == codigo) {
					var dato = $scope.administrativosFijosFolios[i];
					$scope.foliosAdministrativosFijosRechazados.push(dato);
					$scope.administrativosFijosFolios.splice(i,1);
					alert("Exito al Rechazar el Folio Fijo Administrativo");
				};
			}
		}

		/*
		*		Folios Administrativos Interinos
		*/
		$scope.folioInterinoAdministrativo = function(id){
			window.location = "img/Folio.png";
		}
		$scope.VoBoFolioAdministrativoInterino = function(codigo){
			prompt("Pin Firma Electronica: Enviar a Gerencia RRHH");
			for(var i in $scope.administrativosInterinosFolios){
				if ($scope.administrativosInterinosFolios[i].codigo == codigo) {
					var dato = $scope.administrativosInterinosFolios[i];
					$scope.administrativosInterinosFoliosEnviados.push(dato);
					$scope.administrativosInterinosFolios.splice(i,1);
					$("#foliosEnviadosGerenciaRRHHStatus").modal();
				};
			}
		}
		$scope.rechazarFolioInterinoAdministrativo = function(codigo){
			prompt("Comente porque rechazará el Folio Interino Administrativo");
			for(var i in $scope.administrativosInterinosFolios){
				if ($scope.administrativosInterinosFolios[i].codigo == codigo) {
					var dato = $scope.administrativosInterinosFolios[i];
					$scope.foliosAdministrativosFijosRechazados.push(dato);
					$scope.administrativosInterinosFolios.splice(i,1);
					alert("Exito al Rechazar el Folio Interino Administrativo");
				};
			}
		}


		/*
		*		Folios Administrativos Interinos
		*/
	}])
}
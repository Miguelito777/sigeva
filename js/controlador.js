var user;
var admonPerson;
var datos = [];
var solicitudesUDDI = [];
var foliosEnviados = [];
var nombramientos = [];

function loginInit(){
	document.getElementById("titleIndex").innerHTML = "<p class='lead'>Inicio</p>";
	document.getElementById("dataLogin").innerHTML = "<form class='navbar-form pull-right'><label for='user'>Usuario</label><br><input type='text' style='width: 200px;' id='user'><br><br><button type='button' class='btn btn-primary' onclick='loginUser();'>Ingresar</button></form>"
	document.getElementById("informacion").innerHTML = "<br /><a href='#'>Recuperar contraseña</a>";
	document.getElementById("newUser").innerHTML = "<br /><a class='btn btn-link' data-toggle='modal' href='#registrarse'>Registrarse</a>";
}
function loginUser(){
	var name = document.getElementById("user").value;
	if(name == "ChoxVictor"){
		admonPerson = name;
		userExit();
	}else{
		user = new User(name);
		user.login();
	}
}
function loginPassword(){
	var password = document.getElementById("password").value;
	if (admonPerson == "ChoxVictor") {
		if (password == "123456789") 
			window.location = "AdministracionPersonal.html";
		else{
			document.getElementById("resultError").innerHTML = "";
			document.getElementById("resultError").innerHTML = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error!</strong> Usuario Invalido ...</div>";
		}

	}else{
		user.loginPassword(password);
	}
}

function userExit(){
	document.getElementById("dataLogin").innerHTML = "";
	document.getElementById("dataLogin").innerHTML = "<form class='navbar-form pull-right'><label for='user'>Password</label><br><input type='password' style='width: 200px;' id='password'><br><br><button type='button' class='btn btn-primary' onclick='loginPassword();'>Ingresar</button></form>"
}

function userError(){
	document.getElementById("resultError").innerHTML = "";
	document.getElementById("resultError").innerHTML = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error!</strong> Usuario Invalido ...</div>";
}
function passwordError(){
	document.getElementById("resultError").innerHTML = "";
	document.getElementById("resultError").innerHTML = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error!</strong> Password Invalido ...</div>";
}

function serchEmpleado(){
	document.getElementById("dataEmployes").innerHTML = "";
	document.getElementById("dataEmployes").innerHTML = "<table class='table table-striped table-condensed' id='tablaEmployes'><tr class='success'><th>Nombre</th><th>Cargo</th><th>Vacante</th></tr></table>";
	$("#tablaEmployes").append("<tr><td>Miguel Angel Menchu Xoyon</td><td>Auxiliar de Mantenimiento</td><td><button type='button' class='btn btn-link' onclick = 'window.location = \"solicitarProponer.html\"'>Solicitar</button></td></tr>");
}

function calendario(){
	$('#dateStart').datepicker({
		format: "yyyy/mm/dd",
		startDate: '-3d',
		language: 'es' 
	})
	.on("changeDate", function(e){
		$('#dateStart').datepicker('hide');

		var fecha = document.getElementById("dateStart").value;

    	x = fecha.split('/');
    	fecha = x[0]+"-"+x[1]+"-"+x[2];
    	fecha = x[2]+"/"+x[1]+"/"+x[0];
    	document.getElementById("dateStart").value = fecha;
		if(parseInt(x[1]) < 4)
			alert("No esta en la fecha disponible");
	});	
}

function SolicitarEnviar(){
	var password = prompt("Password de Firma Electronica");
	$("#statusSolEnv").modal();
	document.getElementById("bodyDiv").innerHTML = "<img src='img/Loading_icon.gif'>";

	setTimeout(function(){
		document.getElementById("bodyDiv").innerHTML = " <div><p >Autorizado Bajo Firma Electronica:<strong> SFDGSFG89SDFASDF4123</strong> </p></div><br><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Exito!</strong> Solicitud Realizada y Propuesta Enviada Correctamente!!!!</div>";
	},1000);
}



function showSolicitudesEnviadas(){
	document.getElementById("titleSE").innerHTML = "<h1>Solicitudes Enviadas</h1>";
	document.getElementById("SolicitudesEnviadas").innerHTML = "";
	document.getElementById("SolicitudesEnviadas").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("SolicitudesEnviadas").innerHTML = "<table class='table table-striped' id='tablaEmployes'><tr class='info'><th>Fecha Envio</th><th>Hora Envio</th><th>Titular</th><th>Puesto</th><th>Tipo</th><th>Tiempo</th><th>Motivo</th></tr></table>";
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Miguel Angel Menchu Xoyon</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Juan Carlos Fuentes</td><td>Oficial I</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Mario Estuardo Gomez</td><td>Comisario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Saul Efrain</td><td>Secretario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Pedro Alvarado</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployes").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Francisco Monroy</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
	},500);
}
function showSolicitudesAutorizadas(){
	document.getElementById("titleVA").innerHTML = "<h1>Solicitudes Autorizadas</h1>";
	document.getElementById("SolicitudesAutorizadas").innerHTML = "";
	document.getElementById("SolicitudesAutorizadas").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("SolicitudesAutorizadas").innerHTML = "<table class='table table-striped' id='tablaEmployesA'><tr class='success'><th>Fecha Envio</th><th>Hora Envio</th><th>Titular</th><th>Puesto</th><th>Tipo</th><th>Tiempo</th><th>Motivo</th></tr></table>";
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Miguel Angel Menchu Xoyon</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Juan Carlos Fuentes</td><td>Oficial I</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Mario Estuardo Gomez</td><td>Comisario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Saul Efrain</td><td>Secretario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Pedro Alvarado</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesA").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Francisco Monroy</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
	},500);
}
function showSolicitudesRechazadas(){
	document.getElementById("titleSR").innerHTML = "<h1>Solicitudes Rechazadas</h1>";
	document.getElementById("SolicitudesRechazadas").innerHTML = "";
	document.getElementById("SolicitudesRechazadas").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("SolicitudesRechazadas").innerHTML = "<table class='table table-striped' id='tablaEmployesR'><tr class='danger'><th>Fecha Envio</th><th>Hora Envio</th><th>Titular</th><th>Puesto</th><th>Tipo</th><th>Tiempo</th><th>Motivo</th></tr></table>";
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Miguel Angel Menchu Xoyon</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Juan Carlos Fuentes</td><td>Oficial I</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Mario Estuardo Gomez</td><td>Comisario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Saul Efrain</td><td>Secretario</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Pedro Alvarado</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
		$("#tablaEmployesR").append("<tr><td>12/08/2016</td><td>13:00:00</td><td>Francisco Monroy</td><td>Oficial III</td><td>Tipo</td><td>3 Meses</td><td>Licencia</td></tr>");
	},500);
}




/**
* 		Controlador para el modulo de Administracion Personal
*
*/

function solicitudesRecividas(){
	document.getElementById("titleVS").innerHTML = "<h1>Vacantes Solicitadas</h1>";
	document.getElementById("SolicitudesSolicitadas").innerHTML = "";
	document.getElementById("SolicitudesSolicitadas").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("SolicitudesSolicitadas").innerHTML = "<table class='table table-striped' id='tablaEmployes'><tr class='info'><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tipo</th><th>Tiempo</th><th>Propuesta</th><th>Documentos</th><th>Autorizar</th><th>Rechazar</th></tr></table>";
		datos[0] = "<tr><td>Juzgado de Paz Totonicapan</td><td>Carlos Batz</td><td>Oficial III</td><td>Licencia Estudios</td><td>Interina</td><td>2 Meses</td><td>Pedro Tzul</td><td><a href='documents/docEjample.pdf'><span class='glyphicon glyphicon-file'></span> Documentos</a></td><td><a id='0' onclick='autorizarSolicitudes(this.id)'><span class='glyphicon glyphicon-ok'></span> Autorizar</a></td><td><a id='0' onclick=''><span class='glyphicon glyphicon-remove'></span> Rechazar</a></th></tr>";
		datos[1] = "<tr><td>Juzgado de Primera Instancia</td><td>Juan Jose Batz</td><td>Secreatrio</td><td>Destitucion</td><td>Fija</td><td>Indefinido</td><td>Roy Tzul</td><td><a href='documents/docEjample.pdf'><span class='glyphicon glyphicon-file'></span> Documentos</a></td><td><a id='1' onclick='autorizarSolicitudes(this.id)'><span class='glyphicon glyphicon-ok'></span> Autorizar</a></td><td><a id='1' onclick='rechazarSolicitudes(this.id)'><span class='glyphicon glyphicon-remove'></span> Rechazar</a></th></tr>";
		datos[2] = "<tr><td>Juzgado de Sentencia</td><td>Julio Tax</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td><td><a href='documents/docEjample.pdf'><span class='glyphicon glyphicon-file'></span> Documentos</a></td><td><a id='2' onclick='autorizarSolicitudes(this.id)'><span class='glyphicon glyphicon-ok'></span> Autorizar</a></td><td><a id='2' onclick='rechazarSolicitudes(this.id)'><span class='glyphicon glyphicon-remove'></span> Rechazar</a></th></tr>";
		datos[3] = "<tr><td>Juzgado de Sentencia</td><td>Julio Tax</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td><td><a href='documents/docEjample.pdf'><span class='glyphicon glyphicon-file'></span> Documentos</a></td><td><a id='3' onclick='autorizarSolicitudes(this.id)'><span class='glyphicon glyphicon-ok'></span> Autorizar</a></td><td><a id='3' onclick='rechazarSolicitudes(this.id)'><span class='glyphicon glyphicon-remove'></span> Rechazar</a></th></tr>";
		datos[4] = "<tr><td>Juzgado de Sentencia</td><td>Jairo Barreno</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td><td><a href='documents/docEjample.pdf'><span class='glyphicon glyphicon-file'></span> Documentos</a></td><td><a id='4' onclick='autorizarSolicitudes(this.id)'><span class='glyphicon glyphicon-ok'></span> Autorizar</a></td><td><a id='4' onclick='rechazarSolicitudes(this.id)'><span class='glyphicon glyphicon-remove'></span> Rechazar</a></th></tr>";
		for(var i in datos){
			$("#tablaEmployes").append(datos[i]);	
		}
	},500);
}

function autorizarSolicitudes(posicion){
	var comentario = prompt("Agregea alguna observación a UDDI");
	var elementoEnviar = datos.splice(posicion,1);
	solicitudesUDDI.push(elementoEnviar);
	setTimeout(function(){
		alert("Solicitud a UDDI realizada correctamente...");
		document.getElementById("SolicitudesSolicitadas").innerHTML = "";
		document.getElementById("SolicitudesSolicitadas").innerHTML = "<img src='img/Loading_icon.gif'>";
		setTimeout(function(){
			document.getElementById("SolicitudesSolicitadas").innerHTML = "<table class='table table-striped' id='tablaEmployes'><tr class='info'><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tipo</th><th>Tiempo</th><th>Propuesta</th><th>Documentos</th><th>Autorizar</th><th>Rechazar</th></tr></table>";
			for(var i in datos){
				$("#tablaEmployes").append(datos[i]);	
			}
		},500);
	},500);	
}

function rechazarSolicitudes(posicion){
	var comentario = prompt("Comente porque se rechazará la solicitud?");
	var elementoEnviar = datos.splice(posicion,1);
	setTimeout(function(){
		alert("Solicitud rechazada correctamente...");
		document.getElementById("SolicitudesSolicitadas").innerHTML = "";
		document.getElementById("SolicitudesSolicitadas").innerHTML = "<img src='img/Loading_icon.gif'>";
		setTimeout(function(){
			document.getElementById("SolicitudesSolicitadas").innerHTML = "<table class='table table-striped' id='tablaEmployes'><tr class='info'><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tipo</th><th>Tiempo</th><th>Propuesta</th><th>Documentos</th><th>Autorizar</th><th>Rechazar</th></tr></table>";
			for(var i in datos){
				$("#tablaEmployes").append(datos[i]);	
			}
		},500);
	},250);	
}


function solicitudesUDDII(){
	document.getElementById("titleSUDDI").innerHTML = "<h1>Solicitudes Enviadas a UDDI</h1>";
	document.getElementById("SolicitudesUDDI").innerHTML = "";
	document.getElementById("SolicitudesUDDI").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		datosSU = [];
		document.getElementById("SolicitudesUDDI").innerHTML = "<table class='table table-striped' id='tablaEmployesUDDI'><tr class='info'><th>Fecha</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tipo</th><th>Tiempo</th><th>Propuesta</th></tr></table>";
		datosSU[0] = "<tr><td>12/01/2017</td><td>Juzgado de Primera Instancia</td><td>Juan Jose Batz</td><td>Secreatrio</td><td>Destitucion</td><td>Fija</td><td>Indefinido</td><td>Roy Tzul</td></tr>";
		datosSU[1] = "<tr><td>12/01/2017</td><td>Juzgado de Sentencia</td><td>Julio Tax</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td></tr>";
		datosSU[2] = "<tr><td>12/01/2017</td><td>Juzgado de Sentencia</td><td>Julio Tax</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td></tr>";
		datosSU[3] = "<tr><td>12/01/2017</td><td>Juzgado de Sentencia</td><td>Jairo Barreno</td><td>Comisario</td><td>Traslado</td><td>Fijo</td><td>Indefinido</td><td>Marcos Batz</td></tr>";
		for(var i in datosSU){
			$("#tablaEmployesUDDI").append(datosSU[i]);	
		}
	},500);
}


function dictamenesRecividos(){
	document.getElementById("titleDR").innerHTML = "<h1>Dictamenes y Candidatos recibidos de UDDI</h1>";
	document.getElementById("dictamenesRecibidos").innerHTML = "";
	document.getElementById("dictamenesRecibidos").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("dictamenesRecibidos").innerHTML = "<table class='table table-striped' id='tablaEmployesDic'><tr class='success'><th>Fecha</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tiempo</th><th>Propuesta</th><th>Dictamen</th><th>Generar Folio y Enviar</th></tr></table>";
		foliosEnviados[0] = "<tr><td>05/01/2017</td><td>Juzgado de Paz</td><td>Carlos Batz</td><td>Oficial III</td><td>Licencia Estudios</td><td>2 Meses</td><td>Pedro Tzul</td><td><a href='img/lidatoCandidatos.png'><span class='glyphicon glyphicon-list-alt'></span> Lista Candidatos</a></td><td><a id='0' onclick='firmarFolio(this.id)'><span class='glyphicon glyphicon-resize-small'></span> Generar, Firmar y Enviar</a></td></tr>";
		foliosEnviados[1] = "<tr><td>06/01/2017</td><td>Juzgado de la niñez</td><td>Mario Ramirez</td><td>Oficial III</td><td>Destitucion</td><td>Indefinido</td><td>Pedro Tzul</td><td><a href='img/Dictamen.png'><span class='glyphicon glyphicon-list-alt'></span> Dictamen</a></td><td><a id='1' onclick='firmarFolio(this.id)'><span class='glyphicon glyphicon-resize-small'></span>Generar, Firmar y Enviar</a></td></tr>";
		foliosEnviados[2] = "<tr><td>08/01/2017</td><td>Juzgado de sentencia</td><td>Pedro Bazt</td><td>Comisario</td><td>Suspencion</td><td>2 Meses</td><td>Pedro Tzul</td><td><a href='img/lidatoCandidatos.png'><span class='glyphicon glyphicon-list-alt'></span> Lista Candidatos</a></td><td><a id='2' onclick='firmarFolio(this.id)'><span class='glyphicon glyphicon-resize-small'></span> Generar, Firmar y Enviar</a></td></tr>";
		foliosEnviados[3] = "<tr><td>10/01/2017</td><td>Juzgado de ejecucion</td><td>Jairo Tale</td><td>Secreatario</td><td>Licencia Estudios</td><td>2 Meses</td><td>Pedro Tzul</td><td><a href='img/lidatoCandidatos.png'><span class='glyphicon glyphicon-list-alt'></span> Lista Candidatos</a></td><td><a id='3' onclick='firmarFolio(this.id)'><span class='glyphicon glyphicon-resize-small'></span> Generar, Firmar y Enviar</a></td></tr>";
		foliosEnviados[4] = "<tr><td>20/01/2017</td><td>Juzgado de familia</td><td>Marcos Choxom</td><td>Oficial I</td><td>Licencia Estudios</td><td>2 Meses</td><td>Pedro Tzul</td><td><a href='img/lidatoCandidatos.png'><span class='glyphicon glyphicon-list-alt'></span> Lista Candidatos</a></td><td><a id='4' onclick='firmarFolio(this.id)'><span class='glyphicon glyphicon-resize-small'></span> Generar, Firmar y Enviar</a></td></tr>";
		for(var i in foliosEnviados){
			$("#tablaEmployesDic").append(foliosEnviados[i]);	
		}
	},500);
}

function firmarFolio(posicion){
	var comentario = prompt("Pin para firma electronica?");
	var elementoEnviar = foliosEnviados.splice(posicion,1);
	setTimeout(function(){
		alert("Folio enviado correctamente a Entidad Nominadora...");
		document.getElementById("dictamenesRecibidos").innerHTML = "";
		document.getElementById("dictamenesRecibidos").innerHTML = "<img src='img/Loading_icon.gif'>";
		setTimeout(function(){
			document.getElementById("dictamenesRecibidos").innerHTML = "<table class='table table-striped' id='tablaEmployesDic'><tr class='success'><th>Fecha</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Tiempo</th><th>Propuesta</th><th>Dictamen</th><th>Generar Folio y Enviar</th></tr></table>";
			for(var i in foliosEnviados){
				$("#tablaEmployesDic").append(foliosEnviados[i]);	
			}
		},500);
	},500);	
}

function foliosEnviadoss(){
	document.getElementById("titleFE").innerHTML = "<h1>Solicitudes Envidas a Autoridades Nominadoras</h1>";
	document.getElementById("foliosEnviadosData").innerHTML = "";
	document.getElementById("foliosEnviadosData").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("foliosEnviadosData").innerHTML = "<table class='table table-striped' id='dataFoliosEnviados'><tr class='info'><th>Fecha Envio</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Folio</th></tr></table>";
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Miguel Angel Menchu Xoyon</td><td>Juzgado de Familia</td><td>Oficial III</td><td>Licencia</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Juan Vasquez</td><td>Juzgado de Instancia</td><td>Secretario</td><td>Suspencion</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Maria del Carmen</td><td>Juzgado de Paz</td><td>Comisario</td><td>Destitucion</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Luis Carlos Perez</td><td>Juzgado de Ejecucion</td><td>Ofial I</td><td>Traslado</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Marco Barrientos</td><td>Juzgado Familia</td><td>Notificador</td><td>Licencia</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
		$("#dataFoliosEnviados").append("<tr><td>12/08/2016</td><td>Julio Melgar</td><td>Juzgado de la Niniez</td><td>Comisario</td><td>Licencia</td><td><a href='img/Folio.png' ><span class = 'glyphicon glyphicon-paperclip'></span> ver Folio</a></td></tr>");
	},500);
}
function AcuerdosNombramientos(){
	document.getElementById("titleANR").innerHTML = "<h1>Acuerdos de Nombramientos Recibidos</h1>";
	document.getElementById("acuerdosNombramientos").innerHTML = "";
	document.getElementById("acuerdosNombramientos").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("acuerdosNombramientos").innerHTML = "<table class='table table-striped' id='acuerdosNombramientosData'><tr class='success'><th>Fecha</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Accion</th></tr></table>";
		
		nombramientos[0] = "<tr><td>12/08/2016</td><td>Miguel Angel Menchu Xoyon</td><td>Juzgado de Familia</td><td>Oficial III</td><td>Licencia</td><td><a id='0' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		nombramientos[1] = "<tr><td>12/08/2016</td><td>Juan Vasquez</td><td>Juzgado de Instancia</td><td>Secretario</td><td>Suspencion</td><td><a id='1' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		nombramientos[2] = "<tr><td>12/08/2016</td><td>Maria del Carmen</td><td>Juzgado de Paz</td><td>Comisario</td><td>Destitucion</td><td><a id='2' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		nombramientos[3] = "<tr><td>12/08/2016</td><td>Luis Carlos Perez</td><td>Juzgado de Ejecucion</td><td>Ofial I</td><td>Traslado</td><td><a id='3' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		nombramientos[4] = "<tr><td>12/08/2016</td><td>Marco Barrientos</td><td>Juzgado Familia</td><td>Notificador</td><td>Licencia</td><td><a id='4' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		nombramientos[5] = "<tr><td>12/08/2016</td><td>Julio Melgar</td><td>Juzgado de la Niniez</td><td>Comisario</td><td>Licencia</td><td><a id='5' onclick='transcribirNotificar(this.id);' ><span class = 'glyphicon glyphicon-envelope'></span> Transcribir y Notificar</a></td></tr>";
		for(var i in nombramientos){
			$("#acuerdosNombramientosData").append(nombramientos[i]);	
		}
	},500);
}

function transcribirNotificar(posicion){
	prompt("Password para firma electrónica...");
	nombramientos.splice(posicion,1);
	setTimeout(function(){
		alert("Se ha notificado a la Persona Nombrada!!!");
		document.getElementById("acuerdosNombramientos").innerHTML = "";
		document.getElementById("acuerdosNombramientos").innerHTML = "<img src='img/Loading_icon.gif'>";
		setTimeout(function(){
			document.getElementById("acuerdosNombramientos").innerHTML = "<table class='table table-striped' id='acuerdosNombramientosData'><tr class='success'><th>Fecha</th><th>Dependencia</th><th>Titular</th><th>Cargo</th><th>Motivo</th><th>Accion</th></tr></table>";
			for(var i in nombramientos){
				$("#acuerdosNombramientosData").append(nombramientos[i]);	
			}
		},500);
	},500);
}
var user;

function loginInit(){
	document.getElementById("titleIndex").innerHTML = "<p class='lead'>Inicio</p>";
	document.getElementById("dataLogin").innerHTML = "<form class='navbar-form pull-right'><label for='user'>Usuario</label><br><input type='text' style='width: 200px;' id='user'><br><br><button type='button' class='btn btn-primary' onclick='loginUser();'>Ingresar</button></form>"
	document.getElementById("informacion").innerHTML = "<br /><a href='#'>Recuperar contraseña</a>";
	document.getElementById("newUser").innerHTML = "<br /><a class='btn btn-link' data-toggle='modal' href='#registrarse'>Registrarse</a>";
}
function loginUser(){
	var name = document.getElementById("user").value;
	user = new User(name);
	user.login();
}
function loginPassword(){
	var password = document.getElementById("password").value;
	user.loginPassword(password);
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


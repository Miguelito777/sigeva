var user;

function loginInit(){
	document.getElementById("dataLogin").innerHTML = "<form class='navbar-form pull-right'><label for='user'>Usuario</label><br><input type='text' style='width: 200px;' id='user'><br><br><button type='button' class='btn btn-primary' onclick='loginUser();'>Ingresar</button></form>"
}
function loginUser(){
	document.getElementById("loading").innerHTML = "";
	document.getElementById("loading").innerHTML = "<img src='img/Loading_icon.gif' width='75' height='75'>";
	var name = document.getElementById("user").value;
	user = new User(name);
	user.login();
}
function loginPassword(){
	document.getElementById("loading").innerHTML = "";
	document.getElementById("loading").innerHTML = "<img src='img/Loading_icon.gif' width='75' height='75'>";
	var password = document.getElementById("password").value;
	user.loginPassword(password);
}

function userExit(){
	document.getElementById("loading").innerHTML = "";
	document.getElementById("loading").innerHTML = "<img src='img/oj.jpg' width='75' height='75'>";
	document.getElementById("dataLogin").innerHTML = "";
	document.getElementById("dataLogin").innerHTML = "<form class='navbar-form pull-right'><label for='user'>Password</label><br><input type='text' style='width: 200px;' id='password'><br><br><button type='button' class='btn btn-primary' onclick='loginPassword();'>Ingresar</button></form>"
}

function userError(){
	document.getElementById("loading").innerHTML = "";
	document.getElementById("loading").innerHTML = "<img src='img/oj.jpg' width='75' height='75'>";
	document.getElementById("resultError").innerHTML = "";
	document.getElementById("resultError").innerHTML = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error!</strong> Usuario Invalido ...</div>";
}
function passwordError(){
	document.getElementById("loading").innerHTML = "";
	document.getElementById("loading").innerHTML = "<img src='img/oj.jpg' width='75' height='75'>";
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
	$("#statusSolEnv").modal();
	document.getElementById("bodyDiv").innerHTML = "<img src='img/Loading_icon.gif'>";

	setTimeout(function(){
		document.getElementById("bodyDiv").innerHTML = " <div><p >Autorizado Bajo Firma Electronica:<strong> SFDGSFG89SDFASDF4123</strong> </p></div><br><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Exito!</strong> Solicitud Realizada y Propuesta Enviada Correctamente!!!!</div>";
	},1000);
}



function showSolicitudesEnviadas(){
	/*document.getElementById("SolicitudesEnviadas").innerHTML = "";
	document.getElementById("SolicitudesEnviadas").innerHTML = "<img src='img/Loading_icon.gif'>";
	setTimeout(function(){
		document.getElementById("SolicitudesEnviadas").innerHTML = "<table class='table table-striped table-condensed' id='tablaEmployes'><tr class='info'><th>Fecha Envio</th><th>Hora Envio</th><th>Titular</th><th>Hora Envio</th><th>Puesto</th><th>Tipo</th><th>Tiempo</th></tr></table>";
		$("#tablaEmployes").append("<tr><td>Miguel Angel Menchu Xoyon</td><td>Auxiliar de Mantenimiento</td><td><button type='button' class='btn btn-link' onclick = 'window.location = \"solicitarProponer.html\"'>Solicitar</button></td></tr>");
		$("#tablaEmployes").append("<tr><td>Miguel Angel Menchu Xoyon</td><td>13:00:00</td><td>Miguel Angel Menchu Xoyon</td><td>Oficial III</td><td>Miguel Angel Menchu Xoyon</td><td>Interina</td><td>3 Meses</td><button type='button' class='btn btn-link' onclick = 'window.location = \"solicitarProponer.html\"'>Solicitar</button></td></tr>");
	},1000);*/
}

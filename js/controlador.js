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




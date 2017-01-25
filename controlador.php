<?php
include 'modelo.php';
session_start();

if (isset($_POST["login"])) {
	$login = json_decode($_POST["login"],true);
	$user = new User($login["user"]);
	$user = $user->login();
	if ($user["tipo"] == "JefeDependencia") {
		$_SESSION["JefeDependencia"] = new JefeDependencia($user["tipo"],$user["password"]);
		echo true;
	}
	else{
		echo false;
	}
}
if (isset($_POST["loginPassword"])) {
	if (isset($_SESSION["JefeDependencia"])) {
		if ($_SESSION["JefeDependencia"]->password == $_POST["loginPassword"]) {
			echo "JefeDependencia.html";
		}
		else{
			echo "x";
		}
	}
}

?>
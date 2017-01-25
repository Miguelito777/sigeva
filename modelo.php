<?php

/**
* Conexion
*/
class connection 
{
	public $link;

	function __construct()
	{
		
	}
}
/**
* User
*/
class User
{
	public $user;
	public $password;
	function __construct($user)
	{
		$this->user = $user;
	}
	public function login(){
		$user = array();
		if ($this->user == "Miguel") {
			$user["tipo"] = "JefeDependencia";
			$user["name"] = "Miguel";
			$user["password"] = "12345678";
			return $user;
		}
	}
}
/**
* User
*/
class JefeDependencia
{
	public $user;
	
	function __construct($user, $password)
	{
		$this->user = $user;
		$this->password = $password;
	}

}
?>
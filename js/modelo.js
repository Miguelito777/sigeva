function User(user){
	this.user = user; 
}
User.prototype.login = function(){
	var login = {};
	login.user = this.user;
	login = JSON.stringify(login);
	$.ajax({
		url : "controlador.php",
		type : "POST",
		data : {"login":login},
		success : function(data){
			if(data == "1"){
				userExit();
			}
			else
			{
				userError();
			}
		}
	})
}
User.prototype.loginPassword = function(password){
	$.ajax({
		url : "controlador.php",
		type : "POST",
		data : {"loginPassword":password},
		success : function(data){
			if(data != 'x'){
				window.location = data;
			}
			else
			{
				passwordError();
			}
		}
	})
}
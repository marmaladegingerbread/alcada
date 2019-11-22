var v_login = document.getElementById("i-login").value;
var v_pass = document.getElementById("i-pass").value;

function checkData(){
if (v_login == "udlekov"){ document.getElementById("w-output-check").value = "Check"; }
}

function checkLogin() {
    document.getElementById("w-output-check").value = v_login.value;
}
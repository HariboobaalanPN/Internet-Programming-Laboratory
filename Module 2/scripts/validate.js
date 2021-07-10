function validate()
{
    var raw_username=document.forms[0].username.value;
    var raw_password=document.forms[0].passwrd.value;
    var raw_phonenumber=document.forms[0].phonenumber.value;
    var usernamere=new RegExp("^[a-zA-Z][a-zA-Z]*[a-zA-Z]$");
    var passwordre=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})");
    var phonenumberre=new RegExp("^[0-9]{10}$"); 
    var usernameinp=usernamere.exec(raw_username);
    var passwordinp=passwordre.exec(raw_password);
    var phonenumberinp=phonenumberre.exec(raw_phonenumber);
    if(!usernameinp){
        alert("Check Username");
        return false;
    }
    if(!passwordinp){
        alert("Check Password");
        return false;
    }
    if(!phonenumberinp){
        alert("Check PhoneNumber");
        return false;
    }
    alert("All Informations are Correct");
    return true;
}
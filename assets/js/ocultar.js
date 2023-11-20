let usuario = JSON.parse(localStorage.getItem('UsuarioLogueado')) || false

if(!usuario){
   document.getElementById('logueado').style.display = "none";
}

if(usuario){
    document.getElementById('registro').style.display = "none";
}
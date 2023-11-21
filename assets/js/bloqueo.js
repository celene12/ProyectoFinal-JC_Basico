const user = JSON.parse(localStorage.getItem('UsuarioLogueado')) || false
if(!user){
    window.location.href = 'Registro.html'
}

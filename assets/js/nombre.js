const nombre = JSON.parse(localStorage.getItem('UsuarioLogueado'));
document.getElementById('usuario').innerHTML = nombre.name;
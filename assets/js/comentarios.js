const input = document.getElementById('input');
const contador = document.getElementById('span');
const char = document.getElementById('h3');

input.addEventListener('input', e =>{
    if(input.value.length < 50){
        contador.innerHTML = input.value.length;
    }
    else{
        contador.innerHTML = 'Max';
        input.value = input.value.substring(0, 50)
    }
})

function subirComentario(){
    const comentario = document.querySelector('#input').value;
    let usuario = JSON.parse(localStorage.getItem('UsuarioLogueado')) || false
    if(!usuario){
        alert("No estas registrado!, por favor registrase o iniciar sesión para dejar comentario.")
        window.location.href = '/Registro.html'
    }else{
        document.getElementById('user').style.marginTop = "-30px";
        document.getElementById('user').innerHTML = usuario.name;
        document.getElementById('comentario').style.marginLeft = "-20px";
        document.getElementById('comentario').innerHTML = comentario;
    }

}

const signupForm = document.querySelector('#registro1')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#NomApe').value;
    const email = document.querySelector('#Email_Registro').value;
    const password = document.querySelector('#contrasena_registro').value;
    const genero = document.querySelector('#genero').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const isUserRegistered = usuarios.find(usuarios => usuarios.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya esta registado!')
    }

    usuarios.push({
        name: name,
        email: email,
        genero: genero,
        password: password,
    })
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Registro Exitoso!')
})




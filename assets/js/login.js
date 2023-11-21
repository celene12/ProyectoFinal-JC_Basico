const loginForm = document.querySelector('#InicioSesion')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById("Email_Sesion").value
    const password = document.getElementById("contrasena_sesion").value
    const Users = JSON.parse(localStorage.getItem('usuarios')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('UsuarioLogueado', JSON.stringify(validUser))
    window.location.href = 'index.html'

})

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('UsuarioLogueado')
    window.location.href = 'Registro.html'
})
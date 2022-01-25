
function validar() {
    
let nombre, apellido, email, tipomensaje

    nombre = document.getElementById('nombre').value
    apellido = document.getElementById('apellido').value
    email = document.getElementById('email').value
    tipomensaje = document.getElementById('tipomensaje').value

    alert("Buen dia "+ nombre +" "+ apellido +", gracias por tu mensaje de " + tipomensaje +". Te estaremos contactando a tu email " + email)
}
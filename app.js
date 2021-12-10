let nombre = document.querySelector(`#floatingname`);
let correo = document.querySelector(`#floatingemail`);
let mensaje= document.querySelector(`#floatingtextarea`);
let formulario = document.querySelector(`#form`);   

function enviarFormulario(e){
e.preventDefault();
if(nombre.value === null || nombre.value === ''){
    alert("You must complete the name");
}else if(mensaje.value=== null || mensaje.value=== ''){
    alert("You must complete the message");    
}else if(correo.value===null || correo.value ===''){
    alert("You must complete the email");
}else{
    alert("Message Sent")
}

}

document.querySelector(`#botonformulario`).addEventListener(`click`, enviarFormulario);
window.addEventListener('load', () => {

    /* Funciones para no declarar document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    


    let form =$('#formulario')

    /* Elementos que se trabajan para validar */

    let btn = $('#btn')


    let nombre = $('#nombre')
    let edad = $('#edad')
    let localidad = $('#localidad')
    let email = $('#email')
    let telefono = $('#telefono')
    let mensaje = $('#mensaje')
    
    

    /* Expresiones regulares para utilizar */
    let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    /* validar elementos */
        /* Titulo del producto */
    nombre.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#nombrerror').innerHTML = "Debes ingresar tu nombre y apellido"
                this.style.border='2px solid red' ;
                break;
            case !(this.value.trim().length > 5 && this.value.trim().length < 100):
                $('#nombrerror').innerHTML = "Debe tener mas de 5 caracteres y un maximo de 100"
                this.style.border='2px solid red' ;
                break;
            default:
                $('#nombrerror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })

    edad.addEventListener('blur', function() {
        switch (true) {
           
            case !(this.value.trim().length >= 1 && this.value.trim().length <= 2):
                $('#edaderror').innerHTML = "Debe ingresar su edad"
                this.style.border='2px solid red' ;
                break;
                case !(this.value.trim() > 0):
                    $('#edaderror').innerHTML = "Solo se permiten numeros mayores a cero"
                    this.style.border='2px solid red'
 ;
                    break;
            default:
                $('#edaderror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })
    localidad.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#localidaderror').innerHTML = "Debe ingresar su localidad"
                this.style.border='2px solid red' ;
                break;
            case !(this.value.trim().length >= 4 && this.value.trim().length < 10):
                $('#localidaderror').innerHTML = "Debe tener mas de 4 caracteres"
                this.style.border='2px solid red' ;
                break;
            default:
                $('#localidaderror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })
    email.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#emailerror').innerHTML = "Debe ingresar su email"
                this.style.border='2px solid red' ;
                break;
            case !(this.value.trim().length >= 4 && this.value.trim().length < 100):
                $('#emailerror').innerHTML = "Debe tener mas de 4 caracteres"
                this.style.border='2px solid red' ;
                break;
            default:
                $('#emailerror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })
    telefono.addEventListener('blur', function() {
        switch (true) {
           
            case !(this.value.trim().length >= 8 && this.value.trim().length <= 15):
                $('#telefonoerror').innerHTML = "Debe ingresar su telefono (minimo 8 numeros)"
                this.style.border='2px solid red' ;
                break;
               
            default:
                $('#telefonoerror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })
    
    mensaje.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#mensajeerror').innerHTML = "Debe ingresar su mensaje"
                this.style.border='2px solid red' ;
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#mensajeerror').innerHTML = "El mensaje debe contener almenos 10 caracteres y maximo 255"
                this.style.border='2px solid red';
                break;
            default:
                $('#mensajeerror').innerHTML = null
                this.style.border='2px solid black'
                break;
        }
        
    })

    /* Validacion */

    function habilitar (){
        valornombre= nombre.value;
        valoredad= edad.value;
        valorlocalidad= localidad.value;
        valoremail= email.value;
        valortelefono= telefono.value;
        valormensaje= mensaje.value;


     validate = 0

    if(valornombre == ""){
        validate++;
    }
    if(valoredad == ""){
        validate++;
    }
    if(valorlocalidad == ""){
        validate++;
    }
    if(valoremail == ""){
        validate++;
    }
    if(valortelefono == ""){
        validate++;
    }
    if(valormensaje == ""){
        validate++;
    } 
    if  (validate == 0){
        btn.disabled = false
    } else {
        btn.disabled =  true
    }

}
nombre.addEventListener("keyup", habilitar)
edad.addEventListener("keyup", habilitar)
localidad.addEventListener("keyup", habilitar)
telefono.addEventListener("keyup", habilitar)
email.addEventListener("keyup", habilitar)
mensaje.addEventListener("keyup", habilitar)

  
   
})
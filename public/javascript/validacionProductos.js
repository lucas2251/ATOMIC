window.addEventListener('load', () => {

    /* Funciones para no declarar document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log("hola");
        if (!arr.includes(false)) {
            btn.disabled = false
            btn.style.backgroundColor = 'blue'
        }else{
            btn.disabled = true
            btn.style.backgroundColor = 'red'
        }
    }

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
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    /* validar elementos */
        /* Titulo del producto */
    nombre.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#nombrerror').innerHTML = "Debes ingresar tu nombre y apellido"
                this.style.border='2px solid red' ;
                validate.nombre = false
                break;
            case !(this.value.trim().length > 5 && this.value.trim().length < 100):
                $('#nombrerror').innerHTML = "Debe tener mas de 5 caracteres y un maximo de 100"
                this.style.border='2px solid red' ;
                validate.nombre = false
                break;
                case
                  !regExLetter.test(this.value):
                    $('#nombrerror').innerHTML = "El nombre solo acepta letras"
                    nombre.style.border = "3px solid red"
                    break
            default:
                $('#nombrerror').innerHTML = null
                this.style.border='2px solid black'
                validate.nombre = true
                break;
        }
        funcValidate(validate)
    })

    edad.addEventListener('blur', function() {
        switch (true) {
           
            case !(this.value.trim().length >= 1 && this.value.trim().length <= 2):
                $('#edaderror').innerHTML = "Debe ingresar su edad"
                this.style.border='2px solid red' ;
                validate.edad = false
                break;
                case !(this.value.trim() > 0):
                    $('#edaderror').innerHTML = "Solo se permiten numeros mayores a cero"
                    this.style.border='2px solid red'
 ;                 validate.edad = false
                    break;
                    case
                    !regExNumber.test(this.value):
                      $('#edaderror').innerHTML = "Solo se permiten numeros"
                      edad.style.border = "3px solid red"
                      break
                    
            default:
                $('#edaderror').innerHTML = null
                this.style.border='2px solid black'
                validate.edad = true
                break;
        }
        funcValidate(validate)
    })
    localidad.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#localidaderror').innerHTML = "Debe ingresar su localidad"
                this.style.border='2px solid red' ;
                validate.localidad = false
                break;
            case !(this.value.trim().length >= 4 && this.value.trim().length < 10):
                $('#localidaderror').innerHTML = "Debe tener mas de 4 caracteres"
                this.style.border='2px solid red' ;
                validate.localidad = false
                break;
            default:
                $('#localidaderror').innerHTML = null
                this.style.border='2px solid black'
                validate.localidad = true
                break;
        }
        funcValidate(validate)
    })
    email.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#emailerror').innerHTML = "Debe ingresar su email"
                this.style.border='2px solid red' ;
                validate.email = false
                break;
            case !(this.value.trim().length >= 4 && this.value.trim().length < 100):
                $('#emailerror').innerHTML = "Debe tener mas de 4 caracteres"
                this.style.border='2px solid red' ;
                validate.email = false
                break;
                case
                !regExEmail.test(this.value):
                  $('#emailerror').innerHTML = "El email no coincide con un email valido"
                  email.style.border = "3px solid red"
                  break
            default:
                $('#emailerror').innerHTML = null
                this.style.border='2px solid black'
                validate.email = true
                break;
        }
        funcValidate(validate)
    })
    telefono.addEventListener('blur', function() {
        switch (true) {
           
            case !(this.value.trim().length >= 8 && this.value.trim().length <= 15):
                $('#telefonoerror').innerHTML = "Debe ingresar su telefono (minimo 8 numeros)"
                this.style.border='2px solid red' ;
                validate.telefono = false
                break;
                    
               
            default:
                $('#telefonoerror').innerHTML = null
                this.style.border='2px solid black'
                validate.telefono = true
                break;
        }
        funcValidate(validate)
    })
    
    mensaje.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#mensajeerror').innerHTML = "Debe ingresar su mensaje"
                this.style.border='2px solid red' ;
                validate.mensaje = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#mensajeerror').innerHTML = "El mensaje debe contener almenos 10 caracteres y maximo 255"
                this.style.border='2px solid red';
                validate.mensaje = false
                break;
            default:
                $('#mensajeerror').innerHTML = null
                this.style.border='2px solid black'
                validate.mensaje = true
                break;
        }
        funcValidate(validate)
    })

   
    /* Validacion */
    validate = {
        nombre : false,
        edad : false,
        email : false,
       localidad : false ,
        telefono : false ,
       mensaje : false 
    }

    funcValidate(validate)



})

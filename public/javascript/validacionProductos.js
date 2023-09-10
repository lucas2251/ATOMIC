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
    let titulo = $('#titulo')
    let stock = $('#stock')
    let descuento = $('#descuento')
    let categorias = $('#categorias')
    let marcas = $('#marcas')
    let descripcion = $('#descripcion')

    let img = $('#imagen')
    let img2 = $('#imagen2')
    let img3 = $('#imagen3')
    let img4 = $('#imagen4')

    let btn = $('#btn btn-primary')
    

    /* Expresiones regulares para utilizar */
    let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    /* validar elementos */
        /* Titulo del producto */
    titulo.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#tituloError').innerHTML = "Debes ingresar el titulo de tu producto"
                this.style.border='2px solid red'
                validate.titulo = false
                break;
            case !(this.value.trim().length > 5 && this.value.trim().length < 100):
                $('#tituloError').innerHTML = "El titulo del producto debe tener mas de 5 caracteres y un maximo de 10"
                this.style.border='2px solid red'
                validate.titulo = false
                break;
            default:
                $('#tituloError').innerHTML = null
                this.style.border='2px solid black'
                validate.titulo = true
                break;
        }
        funcValidate(validate)
    })

    precio.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#precioError').innerHTML = "Debes ingresar un precio de tu producto"
                this.style.border='2px solid red'
                validate.price = false
                break;
            case !(this.value.trim().length >= 2 && this.value.trim().length <= 10):
                $('#precioError').innerHTML = "El precio del producto debe contener 2 numeros y maximo 10"
                this.style.border='2px solid red'
                validate.price = false
                break;
                case !(this.value.trim() > 0):
                    $('#precioError').innerHTML = "Solo se permiten numeros positivos"
                    this.style.border='2px solid red'
                    validate.titulo = false
                    break;
            default:
                $('#precioError').innerHTML = null
                this.style.border='2px solid black'
                validate.price = true
                break;
        }
        funcValidate(validate)
    })

    descuento.addEventListener('blur', function() {
        switch (true) {
            case !(this.value.trim().length <= 2    ):
                $('#descuentoError').innerHTML = "El descuento no debe ser mayor a 2 cifras"
                this.style.border='2px solid red'
                validate.discount = false
                break;
                case !(this.value.trim() >= 0):
                    $('#descuentoError').innerHTML = "Solo se permiten numeros positivos"
                    this.style.border='2px solid red'
                    validate.titulo = false
                    break;
            default:
                $('#descuentoError').innerHTML = null
                this.style.border='2px solid black'
                validate.discount = true
                break;
        }
        funcValidate(validate)
    })

    stock.addEventListener('blur', function() {
        switch (true) {
           
            case !(this.value.trim().length >= 1 && this.value.trim().length <= 10):
                $('#stockError').innerHTML = "El stock del producto debe contener 1 numero y maximo 10"
                this.style.border='2px solid red'
                validate.stock = false
                break;
                case !(this.value.trim() >= 0):
                    $('#stockError').innerHTML = "Solo se permiten numeros positivos o cero"
                    this.style.border='2px solid red'
                    validate.titulo = false
                    break;
            default:
                $('#stockError').innerHTML = null
                this.style.border='2px solid black'
                validate.stock = true
                break;
        }
        funcValidate(validate)
    })

    categorias.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#categoriaError').innerHTML = 'Debe seleccionar una categoria'
                this.style.border='2px solid red'
                validate.categorias = false
                break;
            
            default:
                $('#categoriaError').innerHTML = null
                this.style.border='2px solid black'
                validate.categorias = true
                break;
        }
        funcValidate(validate)
    })

    marcas.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#marcaError').innerHTML = "Debes ingresar una marca"
                this.style.border='2px solid red'
                validate.marcas = false
                break;
            default:
                $('#marcaError').innerHTML = null
                this.style.border='2px solid black'
                validate.marcas = true
                break;
        }
        funcValidate(validate)
    })

    descripcion.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#descripcionError').innerHTML = "Debes ingresar una descripcion de tu producto"
                this.style.border='2px solid red'
                validate.description = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#descripcionError').innerHTML = "La descripcion del producto debe contener 10 caracteres y maximo 255"
                this.style.border='2px solid red'
                validate.stock = false
                break;
            default:
                $('#descripcionError').innerHTML = null
                this.style.border='2px solid black'
                validate.description = true
                break;
        }
        funcValidate(validate)
    })
     
    
    img.addEventListener('change', function() {
        switch (true) {
            case !regExExt.exec(img.value):
                $('#imagenError').innerHTML = "Solo se permite <br> ingresar una imagen <br> valida fomato <br> (jpg|jpeg|png|jfif|gif|webp)"
                $('#imagenError').border="2px solid red"
                validate.img = false
                break;

            default:
                $('#imagenError').innerHTML = null
                validate.img = true
                break;
        }
        funcValidate(validate)
    })
    
    img2.addEventListener('change', function() {
        switch (true) {
            case !regExExt.exec(img2.value):
                $('#imagenError2').innerHTML = "Solo se permite <br> ingresar una imagen <br> valida fomato <br> (jpg|jpeg|png|jfif|gif|webp)"
                validate.img2 = false
                break;
            default:
                $('#imagenError2').innerHTML = null
                validate.img2 = true
                break;
        }
        funcValidate(validate)
    })
    img3.addEventListener('change', function() {
        switch (true) {
            case !regExExt.exec(img3.value):
                $('#imagenError3').innerHTML = "Solo se permite <br> ingresar una imagen <br> valida fomato <br> (jpg|jpeg|png|jfif|gif|webp)"
                validate.img3 = false
                break;
            default:
                $('#imagenError3').innerHTML = null
                validate.img3 = true
                break;
        }
        funcValidate(validate)
    })
    img4.addEventListener('change', function() {
        switch (true) {
            case !regExExt.exec(img4.value):
                $('#imagenError4').innerHTML = "Solo se permite <br> ingresar una imagen <br> valida fomato <br> (jpg|jpeg|png|jfif|gif|webp)"
                validate.img4 = false
                break;
            default:
                $('#imagenError4').innerHTML = null
                validate.img4 = true
                break;
        }
        funcValidate(validate)
    })

    /* Validacion */
    const validate = {
        titulo : false,
        precio : false,
        descuento : true ,
        stock : true ,
        categorias : false ,
        marcas : false ,
        descripcion : false ,
        img : true ,
        img2 : true ,
        img3 : true ,
        img4 : true 
    }

    funcValidate(validate)



    form.addEventListener('submit',(e) => {
        
        console.log(form.elements);
      /*  if(validate.length > 0){*/
            e.preventDefault();
       /*  }else{
            form.submit()
        } */
    })
   
})
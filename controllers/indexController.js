let productos = require('../data/productos.json')


module.exports = {
    inicio: (req,res) => {
        let indexProductos = productos.filter(producto => {
            
           return  producto.id <=4
        })
        let indexProductos2 = productos.filter(producto => {
            
            return producto.id > 4 && producto.id<=8
         })
        return res.render('inicio',{productos,indexProductos,indexProductos2})
    },
    beneficios: (req,res) => {
        return res.render('beneficios')
    },
    contacto: (req,res) => {
        return res.render('contacto')
    },
    planes: (req,res) => {
        return res.render('planes')
    }
}



module.exports = {
    inicio: (req,res) => {
       
        return res.render('inicio')
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
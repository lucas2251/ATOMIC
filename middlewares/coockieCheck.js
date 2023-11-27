module.exports = (req,res,next) => {
    if (req.cookies.Atomic) {
        req.session.userLogin = req.cookies.Atomic
    }
    next()
}
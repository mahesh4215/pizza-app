function adminController() {
    return {
        login(req, res) {
            res.render('admin/login')
        },
        register(req, res) {
            res.render('admin/register')
        }
    }
}

module.exports = adminController
const homeController = require('../app/http/controllers/homeController');
const adminController = require('../app/http/controllers/adminController');
const cartController = require('../app/http/controllers/customers/cartController');
const guest = require('../app/http/middleware/guest')


function initRoutes(app) {
    app.get('/',homeController().index)

    
    
    app.get('/login', guest, adminController().login)
    app.post('/login', adminController().postLogin)

    app.get('/register', guest, adminController().register)
    app.post('/register', adminController().postRegister)

    app.post('/logout', adminController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    
}

module.exports = initRoutes;
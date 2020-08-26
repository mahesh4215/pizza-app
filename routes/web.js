const homeController = require('../app/http/controllers/homeController');
const adminController = require('../app/http/controllers/adminController');
const cartController = require('../app/http/controllers/customers/cartController');


function initRoutes(app) {
    app.get('/',homeController().index)

    
    
    app.get('/login', adminController().login)

    app.get('/register', adminController().register)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    
}

module.exports = initRoutes;
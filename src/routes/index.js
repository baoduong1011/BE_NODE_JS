const newRouter = require('./TinTuc');
const siteRouter = require('./site');
function route(app) {
    app.use('/tintuc', newRouter);

    // siterouter sẽ match với những gì không đúng với path trên sẽ xuống đây match ra
    app.use('/', siteRouter);

    // app.post('/search', (req, res) => {

    //     res.render('search');
    // })
}

module.exports = route;

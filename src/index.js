const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
//  --- handle bars
const handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// Xử lý dữ liệu với form

app.use(express.json({}));
// middleware để xử lý với code javascript

// urlencoded / json xử lý với body khi ta sử dụng methods POST

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.use(morgan('combined'))

const route = require('./routes');

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    // -> web server với port
    // từ web browser -> index.js -> vào routes (routes được cấu hình sẵn như app.get app.post -> định nghĩa ra các tuyến đường)
    // Action --- dispatcher --> Function Handler tương ứng với app.post('/search', (req, res)
    // post là action và (req,res) -> function handler (dây là controller nhưng không đc viết trực tiếp như trên mà cần tách file ra để thành mô hình MVC)

    // Controller -> Web Browser res.render() -> trả về cho web server
});

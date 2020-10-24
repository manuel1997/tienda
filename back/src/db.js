const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'db_tienda'
});

    connection.connect(function (err) {
        if(err){
            console.log(err);
            return;
        }else{
            console.log('base de datos conectada');
        }
    });

    module.exports = connection
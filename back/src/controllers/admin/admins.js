const adminsController = {}

const mysqlConecction = require('../../db');


adminsController.listAdmin = async (req, res) => {

    const sql = "select * from admins";
    await mysqlConecction.query(sql, (error, result) => {
        if (error) throw error;
        res.json(result);
    });

}

adminsController.insertAdmin = async (req, res) => {

    const { nombre, apellido, usuario, clave } = req.body;
    const sql = "insert into admins set ? ";
    const admin = { nombre, apellido, usuario, clave };
    await mysqlConecction.query(sql, admin, error => {
        if (error) throw error;
        res.json('administrador agregado');
    });

}

adminsController.actualizarAdmin = async (req, res) => {

    const { id } = req.params;
    const { nombre, apellido, usuario, clave } = req.body;
    const sql = `update admins set ? where id = ${id}`

    let admin;

    if (clave.length >= 4) {
         admin = { nombre, apellido, usuario, clave };
    } else {
         admin = { nombre, apellido, usuario };
    }
    await mysqlConecction.query(sql,admin, error => {
        if (error) throw error;
        res.json('administrador actualizado');
    });
}

adminsController.eliminarAdmin = async (req, res) => {

    const { id } = req.params;

    const sql = `delete from admins where id = ${id}`;
    await mysqlConecction.query(sql, error => {
        if (error) throw error;
        res.json('administrador eliminado')
    })

}

module.exports = adminsController;
const path = require('path');
const fs = require('fs');

const productController = {}

const mysqlConecction = require('../../db');


productController.listProduct = async (req,res) =>{
    
    const sql = `SELECT productos.*, productos_img.nombre_img 
    FROM productos 
    INNER JOIN productos_img on productos.id = productos_img.id GROUP BY productos.id`
    mysqlConecction.query(sql, (error,result) => {
        if(error) throw error;
        res.json(result)
    })

}


productController.insertProduct = async (req, res) => {


    const { titulo, categoria, especificaciones, precio, stock, descripcion} = req.body;
    
    const sql = 'INSERT INTO productos SET ?';
    const producto = { titulo, categoria, especificaciones, precio, stock, descripcion }
    await mysqlConecction.query(sql, producto, (error, result) => {
        if (error) throw error;
        if (req.files == []) return res.json('producto registrado')
        let insertid = result.insertId;

        filenames = req.files.map(function (file) {
            return [insertid, file.filename]
        });

        let sql2 = 'INSERT INTO productos_img (id, nombre_img) VALUES ?';
        mysqlConecction.query(sql2, [filenames], error => {
            if (error) throw error;
            res.json('producto registrado')
        });
    }); 


  /*   await mysqlConecction.query(sql, producto, (error, result) => {
        if (error) throw error;
        let insertid = result.insertId;

        filenames = req.files.map(function (file) {
            return [insertid, file.filename]
        });

        let sql2 = `insert into productos_img (id, nombre_img) VALUES ?`;
        mysqlConecction.query(sql2, [filenames], error => {
            if (error) throw error;
            res.send('producto registrado')
        });
    }); */

}


productController.editProduct = async (req,res) => {

    const {id} = req.params;
    
    const sql = `select * from  productos where id = ${id}`
    mysqlConecction.query(sql,(error,result) => {
        if(error) throw error;
        const sql2 = `select * from  productos_img where id = ${id}`
        mysqlConecction.query(sql2,(error,result2) => {
            if(error) throw error;

            res.json({result,result2});
        })
    })

   
}

productController.actualizarProduct = async (req,res) =>{

    const { id } = req.params;

    const { titulo, categoria, especificaciones, stock, precio, descripcion} = req.body;
    const producto = { titulo, categoria, especificaciones, stock, precio, descripcion}
    const sql = `update productos set ? where id = ${id}`;
    await mysqlConecction.query(sql,producto, error => {
        if(error) throw error;
        res.json('producto atualizado');
    })

}

productController.deleteProduct = async (req, res) => {

    const { id } = req.params;

    const sql = `delete from productos  where id = ${id}`;
    await mysqlConecction.query(sql, error => {
        if (error) throw error;
        const sql2 = `select nombre_img from productos_img where id = ${id}`;
        mysqlConecction.query(sql2, (error, results) => {
            if (error) throw error;

            results.map(r => {
                fs.unlinkSync(path.resolve('./src/public/uploads/' + r.nombre_img));
            })
            
            const sql3 = `delete from productos_img  where id = ${id}`;
            mysqlConecction.query(sql3, error => {
                if (error) throw error;
                res.json('producto eliminado')
            })
        })
    })
}


module.exports = productController;
const categController = {}

const { query } = require('express');
const mysqlConecction = require('../../db');


categController.listarCategorias  = async (req,res) =>{

    const sql = 'select * from categorias'
    mysqlConecction.query(sql, (error,result) => {
        if(error) throw error;
        res.json(result);
    })
}

categController.insertCategoria = async (req,res) =>{

    const nombre = req.body.nombre;
    const sql = 'insert into categorias set ?';
    const categoria = {nombre};

     await mysqlConecction.query(sql,categoria,error =>{
        if(error) throw error;
        res.json('categoria insertada');
    })
}


categController.editCategoria = async (req,res) =>{
    const {id} = req.params
    
    const nombre = req.body.nombre_edit;
    const sql = `update categorias set ? where id = ${id}`;
    const categoria = {nombre}

    mysqlConecction.query(sql,categoria, error =>{
        if(error) throw error;
        res.json('categoria actualizada')
    })

}

categController.eliminarCategoria = async (req,res) =>{
    const {id} = req.params

    const sql = `delete from categorias where id = ${id}`
    mysqlConecction.query(sql,error =>{
        if(error) throw error;
        res.json('categoria eliminada');
    })

}

module.exports = categController;
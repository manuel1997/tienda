const categPrincipal = {}

const { query } = require('express');
const mysqlConecction = require('../../db');

categPrincipal.obtCategoria1 = async (req,res) =>{

    const sql = 'select * from categorias_principal';
    mysqlConecction.query(sql, (error,result) =>{
        if(error) throw error;
        res.json(result);
    })
}

categPrincipal.editCatgPrincipal = async (req,res) => {

    const id = req.params.id
    const categoria = req.body.id_categoria

    const sql2 = `select * from categorias where id = ${categoria}`;
    mysqlConecction.query(sql2, (error,result) =>{
        if(error) throw error;
       id_categoria = result[0].id
       nombre = result[0].nombre
       const sql = `update categorias_principal set ? where id = ${id}`;
       const categoria = {id_categoria,nombre};
       mysqlConecction.query(sql,categoria, error =>{
           if(error) throw error;
           res.json('categoria actualizada')
       }) 
    })

  
}

module.exports = categPrincipal;
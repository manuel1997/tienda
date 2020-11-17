const path = require('path');
const fs = require('fs');

const bannerController = {};

const mysqlConecction = require('../../db');


bannerController.listBanner = async (req,res) =>{

    const sql = `select * from banners`;
    mysqlConecction.query(sql, (error,result) =>{
      if(error) throw error;
      res.json(result);
    })
}

bannerController.insertBanner = async (req,res) => {

  const img = req.files[0].filename;

  const { titulo, descripcion, btn,} = req.body;
    const sql = `insert into banners set ?`;
    const banner = { titulo, descripcion, btn, img};
    mysqlConecction.query(sql, banner, error => {
        if (error) throw error;
        res.json('banner insertado');
    }) 
}

bannerController.verBanner = async (req,res) => {

  const {id} = req.params;
    
  const sql = `select * from  banners where id = ${id}`
    mysqlConecction.query(sql,(error,result) => {
      if(error) throw error;
      res.json(result);
  })

}

bannerController.actualizarBanner = async (req,res) =>{

  const {id} = req.params;
  const {titulo,descripcion,btn} = req.body

  const banner = {titulo,descripcion,btn};
  const sql = `update banners set ? where id = ${id}`
  mysqlConecction.query(sql,banner,error =>{
    if(error) throw error;
    res.json('banner actualizado')
  })


}


bannerController.eliminarBanner = async (req,res) =>{
  const {id} = req.params;

  const sql = `select img from banners where id = ${id}`;
  await mysqlConecction.query(sql,(error, result) => {
    if(error) throw error;
      fs.unlinkSync(path.resolve('./src/public/banners/' + result[0].img));
  })
  const sql2 = `delete from banners where id = ${id}`;
   await mysqlConecction.query(sql2, error => {
      if(error) throw error;
     res.json('banner eliminado')
    })
}

module.exports = bannerController;


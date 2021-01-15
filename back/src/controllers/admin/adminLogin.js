const loginController = {};

const jwt = require('jsonwebtoken');
const mysqlConecction = require('../../db');

loginController.loginAdmin = async (req, res) => {
    const { usuario, clave } = req.body;

      await mysqlConecction.query('SELECT * FROM admins WHERE usuario = ? AND clave = ?', [usuario, clave], function (error, result) {
              if (error) throw error;
            if (result.length > 0) {
                const token = jwt.sign({id: result[0].id}, 'secretkey');
                let admin = [{usuario: result[0].usuario, nombre: result[0].nombre, apellido: result[0].apellido}]
                return res.status(200).json({token,admin});
            } else {
                return res.status(401).json({ message: 'Aunathorize' });
            }
        });
};

loginController.verifyToken = (req,res,next) =>{
    if(!req.headers.authorization){
        return res.status(401).send('aunathorize request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('aunathorize request');
    }

    const payload = jwt.verify(token,'secretkey')
    req.userId = payload.id;
    next();
}

loginController.verifyRole = (req,res,next) =>{
    role = 1;
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token,'secretkey')
    req.userId = payload.id;
    if(req.userId == role){
        next();
    }else{
        return res.status(401).send('No tienes permisos');
    }
   

}


module.exports = loginController;











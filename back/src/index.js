const express = require('express');
const  path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();

//Settigns
app.use(cors());
app.set('port',process.env.PORT || 3000);
app.use(express.json());

//Middlware
app.use(express.urlencoded({extended:false}));


 app.use(function (req, res, next) {

    if(req.path == '/api/insertProduct'){
        imgruta =  path.join(__dirname,'public/uploads')
    }else{
        imgruta =  path.join(__dirname,'public/banners')
    } 
    next();
  });


const storage = multer.diskStorage({
    destination:(req,res,callback) => { 
         callback(null, imgruta); 
     },
    filename:(req,file,cb) => {
        cb(null, file.originalname)
    }
});


app.use(upload = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:(req,file,cb) =>{
        const filetype = /jpeg|jpg|png|gif/;
        const mimetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null,true);
        }
        cb("Error archivo no es valido");
    }
}).array('images', 5));


//Routes
app.use(require('./routes/routesAdmin'));


//static files
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo en el puerto', app.get('port'));
});
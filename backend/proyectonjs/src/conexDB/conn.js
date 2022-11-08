const mongoose=require('mongoose');
require("dotenv").config({ path: "variables.env" });
mongoose
    .connect("mongodb://localhost:27017/tiendaDeMascotas", {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
    },(err,res)=>{
            if(err){
            throw err;
            }else{
            console.log('La conexion a la base de datos fue correcta...')
            }
        });
        
    module.exports =mongoose;
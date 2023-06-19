const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const connection=mongoose.connect("mongodb://127.0.0.1:27017/DatabaseCSC")
.then(()=>console.log("connected to the database successfully"))
 .catch((err)=>(console.log(err)));

module.exports=connection;
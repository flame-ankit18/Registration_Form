const mongoose=require('mongoose');
const db=require("../database");

const stateSchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    cityconnect:{type:String,required:true}
})



module.exports=mongoose.model('states',stateSchema);

    
        
     




const mongoose=require('mongoose');
const db=require("../database");



const countrySchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true}
})



module.exports=mongoose.model('countries',countrySchema);


     

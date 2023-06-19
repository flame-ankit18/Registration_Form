const mongoose=require('mongoose');
const db=require("../database");

const citySchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true}
})

const cityModel=mongoose.model('City',citySchema);

module.exports={
    fetchData:function(callback){
        var userData=cityModel.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }

}
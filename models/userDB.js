const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    dob:{
        type:String,
        required:true
    },
    age:{
        type:Number,

    },
    gender:{
        type:String,
        require:true
    }

});

const user=mongoose.model("user",userSchema);

module.exports=user;

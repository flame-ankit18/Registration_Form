 const express=require('express');
 const bodyParser=require('body-parser');
 const path=require("path");
 const fetchRouter = require('./routes/dependencyroutes');
 const db=require("./models/userDB");
 const mongoose=require('mongoose');

//  const DB="mongodb+srv://flameankit10:Ankit9457@cluster1.dzdy50i.mongodb.net/Registration?retryWrites=true&w=majority";
//  mongoose.connect(DB).then(()=>console.log("connected to server successfully")).catch((err)=>console.log(err));

 const app=express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static((path.join(__dirname,'/public'))));


app.use('/api', fetchRouter);

app.post("/", async function(req,res){
    

    const data=new db({

        firstName:req.body.first,
        lastName:req.body.last,
        email:req.body.emails,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        dob:req.body.dob,
        age:req.body.age,
        gender:req.body.gender

    })

    await data.save();



    res.send(req.body);
    
})



app.listen(3000,function(){
    console.log("connected to the server port ");
})

module.exports=app;

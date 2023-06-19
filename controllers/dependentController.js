
const Country=require("../models/CountryModel");
const State=require("../models/StateModel");
const City=require("../models/CityModel");



 const getCountry=async(req,res)=>{
       
       const mydata=await Country.find({});
       
       res.render('index',{userData:mydata});
 }



  module.exports={
    
       getCountry,

       
  }
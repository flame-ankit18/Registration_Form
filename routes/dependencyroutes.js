const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const Country=require("../models/CountryModel");
const State=require("../models/StateModel");
const City=require("../models/CityModel");

const dependency_controller=require("../controllers/dependentController");
const { response } = require('../app');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));


router.get("/fetch-data",dependency_controller.getCountry);




module.exports=router;

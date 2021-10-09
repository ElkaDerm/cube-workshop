const express=require('express');
const storage=require('../service/storage.js')

//create modular router:
const router=express.Router();

//kakvo da pokazwa:
const renderCub=(req, res) =>{
    res.render('create')
}

function createCube (req,res) {
//    console.log(req.body);
   storage.createCub(req.body)
   res.redirect('/create')
}
//zaka4wame html za putq'/create:
router.get('/create',renderCub)
//zaka4wame createCub za router-a:
router.post('/create', createCube)

module.exports=router
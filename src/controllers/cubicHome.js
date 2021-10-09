const express=require('express');


//create modular router:
const router=express.Router();

//
const createCub=(req, res) =>{
    res.render('create')
}
//zaka4wame html za putq'/create:
router.use(createCub)

module.exports=router
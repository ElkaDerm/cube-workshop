const express=require('express');
const router = express.Router();


const homePage =(req,res)=>{
    res.render('index')
}

router.use(homePage);

module.exports=router
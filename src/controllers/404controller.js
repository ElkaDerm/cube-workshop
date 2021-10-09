const express=require('express')
const router=express.Router();

const notFoundPage=(req,res)=>{
    res.render('404')
};

router.use(notFoundPage);

module.exports=router
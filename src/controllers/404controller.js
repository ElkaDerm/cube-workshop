const express=require('express')
const router=express.Router();

const notFoundPage=(req,res)=>{
    res.render('404')
};

router.get('*',notFoundPage);

module.exports=router
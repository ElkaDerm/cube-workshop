const express=require('express');
const router=express.Router();

const aboutPage=(req, res)=>{
    res.render('about')
}

router.use(aboutPage)

module.exports=router
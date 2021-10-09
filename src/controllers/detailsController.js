const express=require('express');
const router=express.Router();

const detailsPage=(req, res)=>{
    res.render('details')
}

router.use(detailsPage)

module.exports=router
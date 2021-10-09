const express=require('express');
const router=express.Router();

const detailsPage=(req, res)=>{
    res.render('details')
}

router.get('/details/:id',detailsPage)

module.exports=router
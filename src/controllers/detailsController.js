const express=require('express');
const router=express.Router();
const storage= require('../service/storage.js')

async function detailsPage (req, res) {
     console.log (req.params.id)
    let oneItem= await storage.getOneById(req.params.id)
     
    res.render('details', {
        one:oneItem
    })
}
async function deleteCub (req,res) {
    await storage.deleteOne(req.params.id)
    res.redirect('/')
}

router.get('/details/:id',detailsPage)
router.get('/delete/:id', deleteCub)

module.exports=router
const express=require('express');
const router=express.Router({mergeParams:true});
const storage= require('../service/storage.js')
const createAccessor=require('./createAccessor.js')
async function detailsPage (req, res) {
     
    let oneItem= await storage.getOneById(req.params.id)


      // let oneCub= await storage.getOneById(req.params.id);
      // let cubeAccessor= await storage.getAllAccesory(req.params.id)
        
        console.log(`Print cubs Accessories---->fromDetailsController ` )
        console.log(oneItem.accessories)
     
    res.render('details', {
        one:oneItem,
        
    })
}
async function deleteCub (req,res) {
    await storage.deleteOne(req.params.id)
    res.redirect('/')
}
// async function addCubAccessory(req,res) {
//     const cubId=req.params.id
//     console.log (cubId)

//     res.render('attachAccessory')
// }

router.get('/details/:id',detailsPage)
router.get('/delete/:id', deleteCub)
router.use('/details/:id/accessory',createAccessor)

module.exports=router
const express= require ('express')
const router= express.Router({mergeParams:true});
const accessorService= require('../service/accessoryService.js')
const storage=require('../service/storage.js')



 function showAccess (req, res) {

    res.render('createAccessory')
}


async function createAccess (req,res) {
    console.log(req.body)
// zapis v DB na dannite ot formata:
  await accessorService.create(req.body)
    res.redirect('/')
}

async function showAttached (req,res) {

    let oneCub= await storage.getOneById(req.params.id);

    let accessory= await accessorService.getAll()
    // console.log(accessory)
    
    res.render('attachAccessory',{
        cube:oneCub,
        accessory,
    })
}

 async function showAccessor(req,res) {
  let accesId=req.body.accessory
   let cubId= req.params.id;

   await storage.attachAccesor(cubId, accesId)

   res.redirect('/details/'+cubId)
}
router.get('/create', showAccess)
router.post('/create',createAccess)
router.get('/attach/:id',showAttached)
router.post('/attach/:id', showAccessor)

module.exports=router
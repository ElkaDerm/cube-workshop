const express= require ('express')
const router= express.Router({mergeParams:true});
const accessorService= require('../service/accessoryService.js')
const storage=require('../service/storage.js')



 function showTemplateAccess (req, res) {

    res.render('createAccessory')
}


async function createAccess (req,res) {
    console.log(req.body)
// zapis v DB na dannite ot formata:
  await accessorService.create(req.body)
    res.redirect('/')
}

async function showCubeAccessor (req,res) {

    let oneCub= await storage.getOneById(req.params.id);
    let cubeAccessor= await storage.getAllAccesory(req.params.id)
    let accessoriesArr= await accessorService.getAll()
    // console.log(cubeAccessor)
    // console.log(accessoriesArr)
    
    res.render('attachAccessory',{
        cube:oneCub,
        cubeAccessor,
        accessoriesArr,
    })
}

 async function attachAccessor(req,res) {

     console.log('from createController-----attachAccessor')
     
     let accesId=req.body.accessory
     console.log('this is accessorId')
  console.log(accesId)


   let cubId= req.params.id;
   console.log('this is cubId:')
   console.log(cubId)

   await storage.attachAccesor(cubId, accesId)
   res.redirect('/details/'+cubId)
}
router.get('/create', showTemplateAccess)
router.post('/create',createAccess)
router.get('/add',showCubeAccessor)
router.post('/add', attachAccessor)

module.exports=router
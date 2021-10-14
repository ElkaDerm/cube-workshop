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
    // let accessoriesArr= await accessorService.getAll()
    // console.log(cubeAccessor)
    // console.log(accessoriesArr)
    let tempAccesArr=await storage.cubAllAccesIds(req.params.id)
    
    let accessoryArr2= await accessorService.getAllWithout(tempAccesArr)
    
    res.render('attachAccessory',{
        cube:oneCub,
        cubeAccessor,
        accessoryArr2,
    })
}

 async function attachAccessory(req,res) {

     console.log('from createController-----attachAccessor')
     
     let accesId=req.body.accessory   //towa idva ot form ot name=accessory{{_id}}
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
router.post('/add', attachAccessory)

module.exports=router
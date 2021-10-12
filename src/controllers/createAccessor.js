const express= require ('express')
const router= express.Router();
const accessorService= require('../service/accessoryService.js')

function showAccess (req, res) {

    res.render('createAccessory')
}


async function createAccess (req,res) {
    console.log(req.body)
// zapis v DB na dannite ot formata:
  await accessorService.create(req.body)
    res.redirect('/')
}

function showAttached (req,res) {
    res.render('attachAccessory')
}
router.get('/create', showAccess)
router.post('/create',createAccess)
router.get('/attach/:id',showAttached)

module.exports=router
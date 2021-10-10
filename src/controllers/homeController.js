const express=require('express');
const router = express.Router();

const storage= require('../service/storage.js')


 async function renderHomePage (req,res) {
     const cubes= await storage.getAll();

    //  console.log(allCubs)

     res.render('index', {
         cubes:cubes
     })
     
    }


router.get('/',renderHomePage);


module.exports=router
const express=require('express');
const router = express.Router();

const storage= require('../service/storage.js')


 async function renderHomePage (req,res) {
     

         let cubes= await storage.getAll();
         res.render('index', {
             cubes:cubes
         })
        }


     async function search(req,res) {

         let cubes= await storage.searched(req.query);
         console.log(cubes)
         res.render('index', {
             title:'SEARCH',
            cubes:cubes
        })
    }
     
    

 
router.get('/',renderHomePage);
router.get('/search',search)

module.exports=router
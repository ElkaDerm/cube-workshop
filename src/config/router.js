
const express=require('express')
const router=express.Router();


const cubicHome=require('../controllers/cubicHome.js')
const homePage=require('../controllers/homeController.js')
const aboutPage=require('../controllers/aboutController.js')
const detailsPage=require('../controllers/detailsController.js')
const notFoundPage=require('../controllers/404controller.js')


router.get('/', homePage)
router.get ('/create',cubicHome)
router.get('/about', aboutPage)
router.get('/details/:id', detailsPage);

router.get('*', notFoundPage)

module.exports=router


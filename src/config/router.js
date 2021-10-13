
const express=require('express')
const router=express.Router();


const cubicHome=require('../controllers/cubicHome.js')
const homePage=require('../controllers/homeController.js')
const aboutPage=require('../controllers/aboutController.js')
const detailsPage=require('../controllers/detailsController.js')
const notFoundPage=require('../controllers/404controller.js')
const createAccessor=require('../controllers/createAccessor.js')

router.use( homePage)
router.use ('/cube',cubicHome)
router.use(aboutPage)
router.use( detailsPage);
router.use('/accessory',createAccessor)

router.use(notFoundPage)

module.exports=router


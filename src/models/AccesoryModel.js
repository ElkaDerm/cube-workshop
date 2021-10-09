const mongoose=require('mongoose');

const accesorSchema=new mongoose.Schema({
    name:String,
    description:String,
})

const Accesor= mongoose.model('Accesor', accesorSchema)

module.exports=Accesor
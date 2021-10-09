const mongoose= require('mongoose');


const cubicSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,

    },
    difficulty:{
        type:Number,
    }
});

const Cube=mongoose.model('Cube',cubicSchema)

module.exports=Cube
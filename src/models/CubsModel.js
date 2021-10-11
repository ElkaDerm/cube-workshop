const mongoose= require('mongoose');


const cubicSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
    description:{
        type:String,
        required:true,
        maxlength:100
    },
    imageUrl:{
        type:String,
        required:true,
        validate:/^https?:\/\//i

    },
    difficulty:{
        type:Number,
        min:1,
        max:6
    }
});

const Cube=mongoose.model('Cube',cubicSchema)

module.exports=Cube
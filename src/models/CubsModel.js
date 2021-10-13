const mongoose= require('mongoose');
const Schema=mongoose.Schema;


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
    },
    accessories:[
        {
            type: Schema.Types.ObjectId,
            ref:'Accesor'
        }
    ],
});

const Cube=mongoose.model('Cube',cubicSchema)

module.exports=Cube
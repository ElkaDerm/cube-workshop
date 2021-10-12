const mongoose=require('mongoose');
// const Accesor=require('../models/AccesoryModel.js')
// const Cube=require('../models/CubsModel.js')
async function initDB() {
try {
  const client=  await mongoose.connect('mongodb://localhost:27017/cubikRubik', {
    usenewUrlParser:true,
    useUnifiedTopology:true
});

console.log('Data base is connected...')

  
} catch (error) {
   console.log (error.message)
}

}


module.exports=initDB
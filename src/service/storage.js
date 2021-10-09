const Cube=require('../models/CubsModel.js');



async function createCub (data) {
  const myCube= new Cube(data);

    await myCube.save()

    
}


module.exports={
  createCub,
}

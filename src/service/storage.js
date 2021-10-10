const Cube=require('../models/CubsModel.js');
const Accesory=require('../models/AccesoryModel.js')

async function getAll() {
  const cubes= await Cube.find({}).lean();
  return cubes
}

async function createCub (data) {
  const myCube= new Cube(data);
    console.log (myCube)
    await myCube.save()

    
}
async function getOneById (id) {

  const oneItem = await Cube.findOne({_id:id}).lean();
  return oneItem
}

async function deleteOne (id) {
  await Cube.findByIdAndDelete({_id:id})
}

module.exports={
  createCub,
  getAll,
  getOneById,
  deleteOne,
}

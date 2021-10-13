const Cube=require('../models/CubsModel.js');
const Accesor=require('../models/AccesoryModel.js')

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

  const oneItem = await Cube.findOne({_id:id}).populate('accessories').lean();
  return oneItem
}

async function searched (query) {

  const searchedItems= await Cube
  .find({})
  .where({name:query.search || ''})
  .where({difficulty:{$gte:Number(query.from), $lte:Number(query.to) }})
  .lean();

  return searchedItems
}

async function deleteOne (id) {
  await Cube.findByIdAndDelete({_id:id})
}

async function attachAccesor(cubeId,accesorId) {
  console.log('from storage------attachAccessor')
  let cube= await Cube.findById(cubeId).lean();
console.log(cube)
  let acces= await Accesor.findById({_id:accesorId}).lean();
console.log(acces)
  cube.accessories.push(acces)
  const newCub= new Cube(cube)
  console.log (cube.accessories)
  await newCub.save()

   
}

async function getAllAccesory(cubeId) {
  let cube= await Cube.findById({_id:cubeId}).populate('accessories').lean();
  // console.log(cube)
  
  return cube.accessories
}

module.exports={
  createCub,
  getAll,
  getOneById,
  deleteOne,
  searched,
  attachAccesor,
  getAllAccesory,
}

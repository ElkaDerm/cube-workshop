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

async function searched (text, from, to) {


let result= await Cube.find({}).lean()
if (text) {
  result=result.filter(x=>x.name.toLowerCase().includes(text.toLowerCase()))
}
if (from) {
 result= result.filter(x=>x.difficulty >=from)
}
if (to) {
  result=result.filter(x=>x.difficulty <= to)
}
return result

}

async function deleteOne (id) {
  await Cube.findByIdAndDelete({_id:id})
}

async function attachAccesor(cubeId,accesorId) {
  console.log('from storage------attachAccessor')
  let cube= await Cube.findById(cubeId);
console.log(cube)
  let acces= await Accesor.findById(accesorId);
 
  cube.accessories.push({_id:acces._id})
  
  console.log (cube.accessories)
  
return cube.save()
   
}

async function getAllAccesory(cubeId) {
  let cube= await Cube.findById({_id:cubeId}).populate('accessories').lean();
  // console.log(cube)
  
  return cube.accessories
}
async function cubAllAccesIds (cubId) {
  let cube= await Cube.findById(cubId).lean()
  let cubAccesIds= cube.accessories;
  return cubAccesIds
}

module.exports={
  createCub,
  getAll,
  getOneById,
  deleteOne,
  searched,
  attachAccesor,
  getAllAccesory,
  cubAllAccesIds,
}

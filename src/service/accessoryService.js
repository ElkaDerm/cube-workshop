const Accesor=require('../models/AccesoryModel.js');

const create = async (data) =>{
  // let newAcces= data;
  // return newAcces.save()


  return await Accesor.create(data)
}
async function getAll () {
  return await Accesor.find({}).lean()
}


module.exports={
    create,
    getAll,
    
}
const Accesor=require('../models/AccesoryModel.js');

const create = async (data) =>{
  // let newAcces= data;
  // return newAcces.save()


  return await Accesor.create(data)
}
async function getAll () {
  return await Accesor.find({}).lean()
}
async function getAllWithout(accessoryIds) {
  // return Accessor.find().where('_id').nin(accessoryIds).lean()
  return Accesor.find({_id: {$nin:accessoryIds}}).lean()
}

module.exports={
    create,
    getAll,
    getAllWithout,
    
}
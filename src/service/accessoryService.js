const Accesor=require('../models/AccesoryModel.js');

const create = async (data) =>{
  return  Accesor.create(data)
}

module.exports={
    create,
}
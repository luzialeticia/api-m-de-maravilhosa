const { ItemToInsert } = require('../models/Maravilhosas')
const model = require('../models/Maravilhosas')
const helpers = require('../helpers/Maravilhosas')

//get
const getAll = (req, res) => {
  res.status(200).json(model.selectAll)
}

//getById
const getById = (req, res) => {
  const { id } = req.params
  const findId = model.selectById(id)

  if(!findId) {
    return res.status(404).send('ID não encontrado.')
  }
  return res.status(200).json(findId)
}

//post
const create = (req, res) => {
  const { name, photo, subtitle, about, phrase, history, addedBy } = req.body

  // let item = new ItemToInsert(name, photo, subtitle, about, phrase, history, addedBy)
  // item.pushItem

  // if(!name || !photo || !subtitle || !about || !phrase || !history || !addedBy) {
  //   res.status(400).send('Incompleto')
  // }
  const item = {
    id: helpers.newId(),
    name: name,
    photo: photo,
    subtitle: subtitle,
    about: about,
    phrase: phrase,
    history: history,
    addedBy: addedBy
  }

  model.insert(item)
  // console.log(item instanceof ItemToInsert);

  console.log(item);
  return res.status(200).json(item)
}

module.exports = {
  getAll,
  getById,
  create
}
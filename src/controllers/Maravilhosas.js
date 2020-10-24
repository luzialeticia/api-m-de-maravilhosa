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

  if(name === undefined || photo === undefined || subtitle === undefined || about === undefined || phrase === undefined ||
    history === undefined || addedBy === undefined) {
    
    return res.status(400).send('Incompleto.')
    
  } else {
    
    const newMaravilhosa = {
      id: helpers.newId(),
      name: name,
      photo: photo,
      subtitle: subtitle,
      about: about,
      phrase: phrase,
      history: history,
      addedBy: addedBy
    }

    const repeatedMaravilhosa = model.insert(newMaravilhosa)

    if(repeatedMaravilhosa === null) {

      return res.status(400).send('Maravilhosa já cadastrada.')
    }
    
    return res.status(200).json(newMaravilhosa)
  }
}

//put
const update = (req, res) => {
  const maravilhosaUpdated = req.body
  const id = parseInt(req.params.id)

  if(id) {
    if(maravilhosaUpdated) {

      const maravilhosa = model.update(id, maravilhosaUpdated)
      return res.status(200).json(maravilhosa)
    }

    return res.status(404).send('Incompleto')
  }
  
  return res.status(400).send('Não encontrado')
}

module.exports = {
  getAll,
  getById,
  create,
  update
}
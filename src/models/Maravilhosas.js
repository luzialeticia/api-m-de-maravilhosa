const data = require('../data/data.json')

//selectAll
const selectAll = data

//selectById
const selectById = (id) => {
  const maravilhosa = data.find(maravilhosa => maravilhosa.id == id)

  return maravilhosa
}

//insertData
const insert = (itemToInsert) => {
  return data.push(itemToInsert)
}

//updateData
const update = (id, itemUpdated) => {
  const maravilhosaToUpdate = data.map(maravilhosa => maravilhosa.id)
  const maravilhosaId = maravilhosaToUpdate.indexOf(id)

  const maravilhosaUpdated = { id, ...itemUpdated }

  data.splice(maravilhosaId, 1, maravilhosaUpdated)

  return maravilhosaUpdated
}

//deleteDate
const deleteItem = (id) => {
  const itemToDelete = data.find(maravilhosa => maravilhosa.id == id)
  const index = data.indexOf(itemToDelete)

  data.splice(index, 1)

  return data
}

module.exports = {
  selectAll,
  selectById,
  insert,
  update,
  deleteItem
}
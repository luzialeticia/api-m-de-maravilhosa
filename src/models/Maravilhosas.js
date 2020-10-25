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
  const searchName = data.find(maravilhosa => maravilhosa.name == itemToInsert.name)

  if(searchName) {
    return null

  } else {
    data.push(itemToInsert)

    return itemToInsert
  }
}

//updateData
const update = (id, itemUpdated) => {
  const searchMaravilhosa = data.find(maravilhosa => maravilhosa.id == id)

  if(searchMaravilhosa) {
    const maravilhosaToUpdate = data.map(maravilhosa => maravilhosa.id)

    const maravilhosaId = maravilhosaToUpdate.indexOf(id)

    const maravilhosaUpdated = { id, ...itemUpdated }

    data.splice(maravilhosaId, 1, maravilhosaUpdated)

    return maravilhosaUpdated
  }
  
  return null
}

//deleteDate
const deleteItem = (id) => {
  const itemToDelete = data.find(maravilhosa => maravilhosa.id == id)

  if(itemToDelete) {
    const index = data.indexOf(itemToDelete)
    data.splice(index, 1)

    return data
  } else {
    return null
  }
}

module.exports = {
  selectAll,
  selectById,
  insert,
  update,
  deleteItem
}
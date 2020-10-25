const data = require('../data/data.json')
const fs = require('fs')

//selectAll
const selectAll = () => data

//selectById
const selectById = (id) => {
  const searchMaravilhosa = data.find(maravilhosa => maravilhosa.id == id)

  if(searchMaravilhosa) {
    return searchMaravilhosa
  }
  return null
  
}

//insertData
const insert = (itemToInsert) => {
  const searchName = data.find(maravilhosa => maravilhosa.name == itemToInsert.name)

  if(searchName) {
    return null

  } else {
    fs.writeFileSync('./src/data/data.json', JSON.stringify([...data, itemToInsert]), 'utf8')

    return itemToInsert
  }
}

//updateData
const update = (id, itemUpdated) => {
  const searchMaravilhosa = data.find(maravilhosa => maravilhosa.id == id)

  if(!searchMaravilhosa) {

    return null
  }
  const maravilhosaToUpdate = data.map(maravilhosa => maravilhosa.id)

  const maravilhosaId = maravilhosaToUpdate.indexOf(id)

  const maravilhosaUpdated = { id, ...itemUpdated }

  data.splice(maravilhosaId, 1, maravilhosaUpdated)
  fs.writeFileSync('./src/data/data.json', JSON.stringify(data), 'utf8')

  return maravilhosaUpdated
}

//deleteDate
const deleteItem = (id) => {
  const maravilhosaToDelete = data.find(maravilhosa => maravilhosa.id == id)

  if(maravilhosaToDelete) {
    const index = data.indexOf(maravilhosaToDelete)
    data.splice(index, 1)

    fs.writeFileSync('./src/data/data.json', JSON.stringify(data), 'utf8')

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
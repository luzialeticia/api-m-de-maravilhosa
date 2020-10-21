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

// function ItemToInsert(name, photo, subtitle, about, phrase, history, addedBy) {
//   this.id = helpers.newId;
//   this.name = name;
//   this.photo = photo;
//   this.subtitle = subtitle;
//   this.about = about;
//   this.phrase = phrase;
//   this.history = history;
//   this.addedBy = addedBy;

//   pushItem = function() {
//     data.push(ItemToInsert)
//   }
// }

//updateData
const update = (id, itemUpdated) => {
  const maravilhosaToUpdate = data.find(maravilhosa => maravilhosa.id == id)

  data.splice(maravilhosaToUpdate, 1, itemUpdated)

  return itemUpdated
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
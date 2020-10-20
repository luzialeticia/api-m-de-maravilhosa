const data = require('../data/data.json')

const newId = () => {
  if(data.length > 0) {
    return data[data.length - 1].id+1
  } else {
    return 1
  }
}

module.exports = {
  newId
}
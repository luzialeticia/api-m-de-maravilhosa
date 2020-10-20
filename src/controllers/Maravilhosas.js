const model = require('../models/Maravilhosas')

//get
const getAll = (req, res) => {
  res.status(200).json(model.selectAll)
}
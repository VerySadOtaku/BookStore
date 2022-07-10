const express = require('express')
const router = express.Router()

const {getBooks, setBooks, updateBooks, deleteBooks} = require('../controller/bookController')

router.route('/').get(getBooks).post(setBooks)
router.route('/:id').put(updateBooks).delete(deleteBooks)

module.exports = router
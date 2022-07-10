const asyncHandler = require('express-async-handler')

// @desc Get books
// @route GET /api/books
// @access PRIVATE


const getBooks = asyncHandler(async (req, res) => {
    res.status(200).json({message:'Get books'})
})

// @desc Create books
// @route POST /api/books
// @access PRIVATE

const setBooks = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set books'})
})

// @desc Update books
// @route PUT /api/books/:id
// @access PRIVATE

const updateBooks = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update book ${req.params.id}`})
})

// @desc Delete books
// @route DELETE /api/books/:id
// @access PRIVATE

const deleteBooks = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update book ${req.params.id}`})
})

module.exports = {
    getBooks, setBooks, updateBooks, deleteBooks
}
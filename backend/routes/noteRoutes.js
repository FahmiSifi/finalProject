const express = require('express')
const {getNotes,createNote, getNoteById, updateNote, deleteNote, getGroupNotes} = require('../controllers/noteController')
const protect = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', protect, getNotes)

router.get('/group',protect, getGroupNotes)

router.post('/create', protect, createNote)


router.get("/:id", getNoteById)

router.put("/:id", protect, updateNote)


router.delete('/:id',protect,deleteNote)














module.exports=router 
const asyncHandler = require("express-async-handler")
const Note = require("../models/noteModel")

const getNotes = asyncHandler(async (req, res) => {
   
        const notes = await Note.find({user:req.user._id})
         res.json(notes)
})

const getGroupNotes = asyncHandler(async (req, res) => {
  const groupNotes = await Note.find({group:req.user.group})
  res.json(groupNotes)
})


const createNote = asyncHandler(async (req, res) => {
  
        const {title, content, category}=req.body
        
        if (!title || !content || !category) {
                res.status(400)
                throw new Error('please fill all fields')
        }
        else {

                const createdNote = await Note.create({ user: req.user._id,group:req.user.group, title, content, category })
                
                res.status(201).json(createdNote)
                
                
        }
})


const getNoteById = asyncHandler(async (req, res) => {
  
        const note = await Note.findById(req.params.id)
        if(note) {
        
                res.json(note)
        
        }
        else {
                res.status(404)

                throw new Error('note not found');
                
        
        }

})


const updateNote = asyncHandler(async (req, res) => {

        const { title, content, category } = req.body

        const note = await Note.findById(req.params.id)
        
        
        if (note) {
                if (note.user.toString() !== req.user._id.toString()) {
                
                        res.status(401)
                        throw new Error('not authorized to do this action ')
               
                }
        
                else {
                        if(title && content && category){
                        note.title = title
                        note.content = content
                        note.category = category
                
                        const updatedNote = await note.save()
                                res.json(updatedNote)
                        }
                        else {
                                res.status(400)
                                throw new Error('you should Fill all field')
                        }
                }
        }
        else {
                res.status(404)
                throw new Error('note not found ')
        }
        
})

const deleteNote = asyncHandler(async (req, res) => {
  
        const note = await Note.findById(req.params.id)

        
         if (note) {
           if (note.user.toString() !== req.user._id.toString()) {
             res.status(401);
             throw new Error("not authorized to do this action ");
           } else {
             
                   await note.remove()
                   res.send('deleted')
           }
         } else {
           res.status(404);
           throw new Error("note not found ");
         }
      

  

});




module.exports={getNotes,getGroupNotes,createNote,getNoteById,updateNote,deleteNote}
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getGroupNotesList } from '../../redux/actions/notesActions'
import { Accordion,Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom";


function GroupNotes({search}) {
    const AllNotes = useSelector(state => state.AllNotes)
    const { all } = AllNotes
    console.log(all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGroupNotesList())
        
    },[])
    return (
      <Container>
        <h1>Notes of your group</h1>
            {all?.filter(Note => Note.title.toLowerCase().includes(search.toLowerCase())).map(note=> 
      <Accordion key={note._id}>
        <Card>
          <Card.Header
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              <Accordion.Toggle
                eventKey="0"
                style={{ border: "none", background: "rgba(0,0,0,.03)" }}
              >
                {note.title}
              </Accordion.Toggle>
            </span>
            
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">created on {note.createdAt.substring(0, 10)}</footer>
              </blockquote>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )}
        </Container>
    )
}

export default GroupNotes

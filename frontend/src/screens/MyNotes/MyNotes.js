import { useEffect} from "react"
import { Accordion, Button, Card, Container } from "react-bootstrap"
import { Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {  deleteNoteAction, getNotesList } from "../../redux/actions/notesActions"
import Loading from '../../components/Loading'
import Error from '../../components/Error'
function MyNotes({ search }) {
  const dispatch = useDispatch()
  const noteList = useSelector(state => state.noteList)
  const { loading, notes, error } = noteList
    
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const updateNote = useSelector(state => state.updateNote)
    
  const { success } = updateNote
  
  const deleteNote = useSelector(state => state.deleteNote);

  const { loading: loadingDelete, error: errorDelete, sucess: successDelete } = deleteNote;

  
  
  
    
  const deleteHandler = (id) => {
    window.confirm('Are you sure ') &&
      dispatch(deleteNoteAction(id))
  }

  
  
  
  useEffect(
    () => {
      dispatch(getNotesList());
    },
    [dispatch, success, loadingDelete]
  );
    
  return (
    <Container>
    
      <h1> welcome { userInfo.name }</h1>

    <Link to="/createnote">
      <Button size="sm" variant="success" className="mt-5 mb-2">
        + Create a new Note
      </Button>
    </Link>
  { loading ? <Loading /> : null }
  { error ? <Error><p>an error happen</p></Error> : null }

  {
    notes?.reverse().filter(Note => Note.title.toLowerCase().includes(search.toLowerCase())).map(note => (
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
            <div>
              <Link to={`/note/${note._id}`}>
                <Button style={{ width: "100px" }}>Edit</Button>
              </Link>
              <Button
                variant="danger"
                style={{ width: "100px" }}
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
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
    ))
  }
        </Container >

)
}

export default MyNotes

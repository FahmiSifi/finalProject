import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Form,Button } from "react-bootstrap"
import { useDispatch,useSelector } from "react-redux";
import Error from "../../components/Error";
import { updateNoteAction } from "../../redux/actions/notesActions";

function Note({ match, history }) {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
   const dispatch = useDispatch()
  
  const updateNote = useSelector(state => state.updateNote)
  
  const {loading,error}=updateNote 
  //const apiUrl='http://localhost:5000'
    const fetch = async () => {

      const { data } = await axios.get(`/api/notes/${match.params.id}`)
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
    }
   
    useEffect(() => {
        
         fetch()
    }, [match.params.id])
    
    const submitHandler = (e) => {
      e.preventDefault()
          
      dispatch(updateNoteAction(title, content, category, match.params.id))
      if (title && content && category) {
        history.push("/notes");
      }
        
        
    

    }

    
    return (
      <div>
        <Container style={{ width: "800px"}}>
                {error ? <Error>{error}</Error>:null}
          <Card>
            <Card.Header>
              {" "}
              <h6>Edit your Note</h6>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={title}
                    type="title"
                    placeholder="Enter the title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="content">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={content}
                    placeholder="Enter the content"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    value={category}
                    placeholder="Enter the Category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" className="mt-3 mx-2 ">
                  {" "}
                  update Note
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
}

export default Note

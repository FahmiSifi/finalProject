import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { createNoteAction } from "../../redux/actions/notesActions";


function CreateNote({history}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")

    const dispatch = useDispatch()

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(createNoteAction(title, content, category))
      if (title && content && category) {
              
            history.push("/notes")

      }

  }
  
  const createNote = useSelector((state) => state.createNote);

  const { loading,error } = createNote

    return (
      <Container style={{ width: "800px" }}>
        <Card>
          <Card.Header>
            {" "}
            <h6>Create a new Note</h6>
          </Card.Header>
          <Card.Body>
            {error && <Error variant="danger">{error}</Error>}

            <Form onSubmit={submitHandler}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
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
                  placeholder="Enter the content"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  placeholder="Enter the Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
              {loading && <Loading />}

              <Button type="submit" className="mt-3 mx-2 ">
                {" "}
                Create Note
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
}

export default CreateNote

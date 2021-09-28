import { useEffect, useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import { login } from "../../redux/actions/userActions"

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin
  const dispatch = useDispatch()
  useEffect(() => {
    if(userInfo){ 
    history.push('/notes')}

  },[history,userInfo])

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container className="mt-3" style={{ width: "300px" }}>
      <h1>Login</h1>
      {error ? <Error>{error}</Error> : null}
      {loading ? <Loading /> : null}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Row className="mt-3">
        <Col>
          {" "}
          New Customer ?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register Here
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;

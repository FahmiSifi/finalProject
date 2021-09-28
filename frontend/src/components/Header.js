import {Navbar,Nav,NavDropdown,Form,FormControl, Container} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userActions'

function Header({setSearch}) {
    const history = useHistory();
  const dispatch = useDispatch()
  
  const userLogin = useSelector(state => state.userLogin);

  const { userInfo} = userLogin 

    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
              {" "}
              My NotesApp{" "}
            </Link>{" "}
          </Navbar.Brand>
          {userInfo ? (
            <>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="m-auto">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </Nav>
                <Nav
                  className=" my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown
                    title={userInfo.name.toUpperCase()}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item>
                      {" "}
                      <Link to="/notes" style={{ textDecoration: "none" }}>
                        My Notes
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    
                      <Link to="/allnotes" style={{ textDecoration: "none" }}>
                        All Notes
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logout());
                        history.push("/");
                      }}
                    >
                      Log out
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>{" "}
            </>
          ) : null}
        </Container>
      </Navbar>
    );
}

export default Header

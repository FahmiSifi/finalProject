import { Button, Container,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import './LandingPage.css'
function LandingPage() {
  

  return (
    <>
      <div
        className=" d-flex  flex-column align-items-center justify-content-center mt--5"
        style={{
          height: "100%",
          backgroundImage:
            "url(https://thumbs.dreamstime.com/z/book-pencil-notebook-sticky-notes-coffee-lie-wooden-table-212286870.jpg)",
          backgroundPosition: "center",
        }}
      >
        <h1> Welcome to My NotesApp </h1>
        <h5> A safe place to share Notes with your group</h5>
        <div className="mt-2">
          <Link to="/login">
            <Button size="lg" variant="success" className="mx-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="primary">
              signup
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage

import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route} from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"
import Header from './components/Header'
import CreateNote from "./screens/CreateNote/CreateNote";
import Note from "./screens/UpdateNote/Note";
import { useState } from "react";
import AllNotes from "./screens/AllNotes/AllNotes";
function App() {
  const [search, setSearch] = useState("")
  return (
    <BrowserRouter>
      <header style={{ height: "10vh" }}>
        <Header setSearch={setSearch} />
      </header>
      <main style={{ height: "80vh" }}>
        <Route exact path="/" component={LandingPage} /> 
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={Note} />
        <Route path="/notes" component={() => <MyNotes search={search} />} />
        <Route path="/allnotes" component={() => <AllNotes search={search}/>}/>
      </main>
    </BrowserRouter>
  )
}

export default App;

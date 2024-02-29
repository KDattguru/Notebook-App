import "./App.css"; import { Route, Routes, BrowserRouter } from "react-router-dom"; import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import AlertC from './components/AlertC';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavbarComponent />
          <AlertC message="simple Alert!"/> <div className="container"> <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Work from "./pages/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/work" element={<Work/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;


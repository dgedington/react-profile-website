import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


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


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Cricket Live App/Nav';
import About from './Pages/About';
import Series from './Pages/Series';
import Home from './Pages/Home';
function App() {
  return (
    <Router>
    <div className="App">     
     <Nav/>
     <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="Series" element={<Series/>} />
      <Route path="About" element={<About/>} />
    </Routes>
    </div>
    </Router>
   
  );
}

export default App;
import { useState } from "react";
import FlowDiagram from "./Components/FlowDiagram";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import History from "./Components/History";
import Carts from "./Components/Carts";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  

  return (
    <>
     <div style={{ backgroundColor:' #042743', height: '100vh' }}>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Carts />} />
      <Route path="/history" element={<History  />} />
      <Route path="/FlowDiagram" element={ <FlowDiagram />} />
      <Route path="/Carts" element={<Carts />} />
      </Routes>
     
      </Router>
      </div>
    </>
  );
}

export default App;

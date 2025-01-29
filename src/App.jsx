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
  const[mode,setMode]=useState('info');
  const toogleMode=()=>{
    if(mode === 'info'){
     setMode('dark')
    //  document.body.style.backgroundColor="#042743";
    document.body.style.backgroundColor="#042743";
    
    }
    else{
     setMode('info')
    //  document.body.style.backgroundColor="white"
     document.body.style.backgroundColor="white"
    }
 }
 const [img,setImg]=useState('mongodb.png');
 const setImage = () => {
   setImg('devops.png')
   document.body.style.backgroundImage='devops.png';
   console.log(`url(${img})`)
 }
 const [color,setColor]=useState('#ffffff');  
  function updatedColor(event) {
    setColor(event.target.value)
   document.body.style.backgroundColor=color;
  }
  
  return (
    <>
     <div >
    <Router>
      <Navbar mode={mode} toogleMode={toogleMode} color={color} updatedColor={updatedColor}  img={img} setImage={setImage}/>
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

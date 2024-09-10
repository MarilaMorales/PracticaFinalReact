import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';
import AboutUS from '../Pages/AboutUs.jsx';
import Protect from "../ProtectedRoute.jsx";


const Routing = () => {
  return (
    
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/AboutUs" element={<AboutUS />} />
       <Route path="/tareas" element={<Protect><Tareas /></Protect>}/>
     </Routes>
   );
};
export default Routing;

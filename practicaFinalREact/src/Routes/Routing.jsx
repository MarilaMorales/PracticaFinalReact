import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';
import AboutUS from '../Pages/AboutUs.jsx';


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Tareas" element={<Tareas />} />
       <Route path="/AboutUs" element={<AboutUS />} />
     </Routes>
    </Router>
   );
};
export default Routing;

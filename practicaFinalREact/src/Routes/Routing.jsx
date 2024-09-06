import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Tareas" element={<Tareas />} />
     </Routes>
    </Router>
   );
};
export default Routing;

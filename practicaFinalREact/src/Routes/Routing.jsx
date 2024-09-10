import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';
import AboutUS from '../Pages/AboutUs.jsx';
import ProtectedRoute from ' .. /ProtectedRoute';


const Routing = () => {
  return (
    
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/AboutUs" element={<AboutUS />} />
       <Route path="/Home" element={<ProtectedRoute><Tareas /></ProtectedRoute>}/>
     </Routes>
   );
};
export default Routing;

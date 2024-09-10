import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';
import AboutUS from '../Pages/AboutUs.jsx';
import Protect from "../ProtectedRoute.jsx";
import ContactUS from '../Pages/ContacUs.jsx';


const Routing = () => {
  return (
    
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/ContactUs" element={<Protect>< ContactUS /></Protect>}/>
       <Route path="/AboutUs" element={<Protect><AboutUS /></Protect>}/>
       <Route path="/tareas" element={<Protect><Tareas /></Protect>}/>
     </Routes>
   );
};
export default Routing;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Tareas from '../Pages/Tareas.jsx';
import AboutUs from '../Pages/AboutUs.jsx';
import Protect from "../ProtectedRoute.jsx";
import ContactUs from '../Pages/ContacUs.jsx';


const Routing = () => {
  return (
    
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/tareas" element={<Protect><Tareas /></Protect>}/>
     </Routes>
   );
};
export default Routing;

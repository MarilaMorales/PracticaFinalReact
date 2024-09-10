import React from 'react'
import '../Styles/Tareas.css'
import "../Styles/NavBar.css"
import Task from '../Componentes/FormTareas'
import NavBar from '../Componentes/Navbar'
import Footer from '../Componentes/Footer'

function Tareas() {
  return (
    <div>
      <NavBar />
      <Task />
      <Footer />

    </div>
  )
}

export default Tareas

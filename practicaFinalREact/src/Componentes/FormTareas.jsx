import React, { useState, useEffect } from 'react';
import { getTareas } from '../Services/get';
import { deleteTarea } from '../Services/delete';
import { postTareas } from '../Services/post';
import { updateTarea } from '../Services/put';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Tareas.css';
import EditarModal from './EditarModal';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';







const Task = () => {
    const [tareaInput, setTareaInput] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [tareas, setTareas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tareaAEditar, setTareaEditar] = useState(null);
    const navigate = useNavigate();



    

    useEffect(() => {
        cargarTareas();
    }, []);


    const AgregarTarea = async () => {
        if (tareaInput !== '' && prioridad) {
            let tareaExistente = tareas.some(tarea => tarea.tarea === tareaInput); //Ve si hay tarea con el mismo nombre

            if (tareaExistente) {
                toast.error("La tarea ya está registrada");
                return;
            }

            const nuevaTarea = { tarea: tareaInput, prioridad }; //Si la tarea es nueva, hay nuevo objeto
            try {
                await postTareas(nuevaTarea); //
                setTareas([...tareas, nuevaTarea]);
                setTareaInput('');
                setPrioridad('');
                toast.success("Tarea agregada exitosamente");
            } catch (error) {
                toast.error("Error al agregar tarea");
                console.error('Error al agregar tarea:', error);
            }
        } else {
            toast.error("Por favor, completa todos los campos de la tarea.");
        }
    };




    const cargarTareas = async () => { //Carga las Tareas desde el db.json
        try {
            const data = await getTareas();
            setTareas(data); //Actualiza las tareas con la nueva data
        } catch (error) {
            console.error('Error al cargar tareas:', error);
        }
    };




    const eliminarTarea = async (tareaDelete) => { 
        try {
            await deleteTarea(tareaDelete.id); //Se llama a deleteTarea con el ID de la tarea a elimina
            setTareas(tareas.filter(tarea => tarea.id !== tareaDelete.id));// Devuelve solo las tareas sin ID eliminado
            toast.success("Tarea eliminada exitosamente");
        } catch (error) {
            toast.error("Error al eliminar tarea");
            console.error("Error al eliminar tarea:", error);
        }
    };



    //Se llama al modal de edición y se guarda la tarea

    const EditarTarea = (tarea) => {
        setTareaEditar(tarea);
        setShowModal(true);
    };



    const GuardarEditar = async (tareaEditada) => { //actualizar una tarea editada
        try {
            await updateTarea(tareaEditada.id, tareaEditada); //Se llama desde el put para actualizar
            setTareas(tareas.map(tarea => 
                tarea.id === tareaEditada.id ? tareaEditada : tarea //Se actualiza La tarea, con la tarea modificada
            ));
            toast.success("Tarea editada exitosamente");
        } catch (error) {
            toast.error("Error al editar tarea");
            console.error('Error al editar tarea:', error);
        }
    };






    
    return (
        
        <div className="tareasConteiner">
            <h2 id="h2Titulo">Tareas</h2>
            <div className="tareasConteiner2">
                <div className="containerTareas">
                    <input
                        id="tarea"
                        type="text"
                        placeholder="Agregar Tarea"
                        value={tareaInput}
                        onChange={(e) => setTareaInput(e.target.value)}
                        required
                    />
                    <select
                        id="prioridadTarea"
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    >
                        <option value="">Selecciona una prioridad</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <Button id="btnAgregarTarea" onClick={AgregarTarea}>Agregar Tarea</Button>
                </div>
                <div id="contenedorTareas">
                    {tareas.map((tarea) => (
                        <div key={tarea.id} className="tarea">
                            {`Tarea: ${tarea.tarea} - Prioridad: ${tarea.prioridad}`}
                            <div className="btnContainer">
                                <Button onClick={() => eliminarTarea(tarea)}>Eliminar</Button>
                                <Button onClick={() => EditarTarea(tarea)}>Editar</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {tareaAEditar && (
                <EditarModal
                    show={showModal}
                    CerrarModal={() => setShowModal(false)}
                    tareaAEditar={tareaAEditar}
                    onSave={GuardarEditar}
                />
            )}
        </div>
    );
};

export default Task;

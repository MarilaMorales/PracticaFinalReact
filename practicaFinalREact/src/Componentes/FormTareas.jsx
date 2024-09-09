import React, { useState, useEffect } from 'react';
import { getTareas } from '../Services/get';
import { deleteTarea } from '../Services/delete';
import { postTareas } from '../Services/post';
import { updateTarea } from '../Services/put';
import '../Styles/Tareas.css';

const Task = () => {
    const [tareaInput, setTareaInput] = useState('');
    const [prioridad, setPrioridad] = useState(''); // Cambiado a un solo valor
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        cargarTareas();
    }, []);

    const AgregarTarea = async () => {
        if (tareaInput !== '' && prioridad) { // Cambiado de prioridades.length > 0 a prioridad
            let tareaExistente = false;
            for (let i = 0; i < tareas.length; i++) {
                if (tareas[i].tarea === tareaInput) {
                    tareaExistente = true;
                    break;
                }
            }

            if (tareaExistente) {
                alert("La tarea ya está registrada");
                return;
            }

            const nuevaTarea = { tarea: tareaInput, prioridad }; 
            try {
                await postTareas(nuevaTarea);
                setTareas(tareas.concat(nuevaTarea)); 
                setTareaInput('');
                setPrioridad(''); // Limpia el valor de prioridad
            } catch (error) {
                console.error('Error al agregar tarea:', error);
            }
        } else {
            alert("Por favor, completa todos los campos de la tarea.");
        }
    };

    const cargarTareas = async () => {
        try {
            const data = await getTareas();
            setTareas(data);
        } catch (error) {
            console.error('Error al cargar tareas:', error);
        }
    };

    const eliminarTarea = async (tareaAEliminar) => {
        try {
            await deleteTarea(tareaAEliminar.id);
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== tareaAEliminar.id);
            setTareas(tareasActualizadas);
        } catch (error) {
            console.error('Error al eliminar tarea:', error);
        }
    };

    const editarTarea = async (tareaAEditar) => {
        const nuevaTarea = prompt("Edita la tarea:", tareaAEditar.tarea);
        const nuevaPrioridad = prompt("Edita la prioridad de la tarea:", tareaAEditar.prioridad);
        if (nuevaTarea && nuevaPrioridad) {
            const tareaEditada = { id: tareaAEditar.id, tarea: nuevaTarea, prioridad: nuevaPrioridad };

            try {
                await updateTarea(tareaAEditar.id, tareaEditada);
                const tareasActualizadas = tareas.map(tarea =>
                    tarea.id === tareaAEditar.id ? tareaEditada : tarea
                );
                setTareas(tareasActualizadas);
            } catch (error) {
                console.error('Error al editar tarea:', error);
            }
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
                    <button id="btnAgregarTarea" onClick={AgregarTarea}>Agregar Tarea</button>
                </div>
                <div id="contenedorTareas">
                    {tareas.map((tarea) => (
                        <div key={tarea.id} className="tarea">
                            {`Tarea: ${tarea.tarea} - Prioridad: ${tarea.prioridad}`} {/* Cambiado a prioridad única */}
                            <button onClick={() => eliminarTarea(tarea)}>Eliminar</button>
                            <button onClick={() => editarTarea(tarea)}>Editar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Task;

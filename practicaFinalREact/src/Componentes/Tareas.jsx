import React, { useState, useEffect } from 'react';

const Tareas = () => {
    const [tareaInput, setTareaInput] = useState('');
    const [prioridades, setPrioridades] = useState([]);
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        cargarTareas();
    }, []);

    const AgregarTarea = () => {
        if (tareaInput !== '' && prioridades.length > 0) {
            const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
            const tareaExistente = tareasGuardadas.some(t => t.tarea === tareaInput);
            if (tareaExistente) {
                alert("La tarea ya está registrada");
                return;
            }

            const nuevaTarea = { tarea: tareaInput, prioridades };
            const tareasActualizadas = [...tareas, nuevaTarea];
            setTareas(tareasActualizadas);
            guardarTarea(nuevaTarea);

            // Limpiar campos
            setTareaInput('');
            setPrioridades([]);
        } else {
            alert("Por favor, completa todos los campos de la tarea.");
        }
    };

    const guardarTarea = (tarea) => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareasGuardadas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    };

    const cargarTareas = () => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        setTareas(tareasGuardadas);
    };

    const eliminarTarea = (tareaAEliminar) => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        const tareasActualizadas = tareasGuardadas.filter(t => !(t.tarea === tareaAEliminar.tarea && JSON.stringify(t.prioridades) === JSON.stringify(tareaAEliminar.prioridades)));
        setTareas(tareasActualizadas);
        localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    };

    const editarTarea = (tareaAEditar) => {
        const nuevaTarea = prompt("Edita la tarea:", tareaAEditar.tarea);
        const nuevasPrioridadesTemp = prompt("Edita las prioridades de la tarea (separadas por coma):", tareaAEditar.prioridades.join(','));
        if (nuevaTarea && nuevasPrioridadesTemp) {
            const nuevasPrioridades = nuevasPrioridadesTemp.split(',').map(p => p.trim());
            eliminarTarea(tareaAEditar);
            const tareaEditada = { tarea: nuevaTarea, prioridades: nuevasPrioridades };
            guardarTarea(tareaEditada);
            setTareas([...tareas, tareaEditada]);
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
                        multiple
                        value={prioridades}
                        onChange={(e) => setPrioridades([...e.target.selectedOptions].map(option => option.value))}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button id="btnAgregarTarea" onClick={AgregarTarea}>Agregar Tarea</button>
                </div>
                <div id="contenedorTareas">
                    {tareas.map((tarea, index) => (
                        <div key={index} className="tarea">
                            {`Tarea: ${tarea.tarea} - Prioridades: ${tarea.prioridades.join(', ')}`}
                            <button onClick={() => eliminarTarea(tarea)}>Eliminar</button>
                            <button onClick={() => editarTarea(tarea)}>Editar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tareas;

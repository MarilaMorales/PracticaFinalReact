

export const updateTarea = async (id, tarea) => {
    try {
        const response = await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarea),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

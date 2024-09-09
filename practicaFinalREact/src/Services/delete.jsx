export const deleteTarea = async (id) => {
    try {
        const response = await fetch(`${'http://localhost:3001/tareas'}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar tarea');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};


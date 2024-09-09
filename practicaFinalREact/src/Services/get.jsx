export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}



export const getTareas = async () => {
    try {
        const response = await fetch('http://localhost:3001/tareas');
        if (!response.ok) {
            throw new Error("Error al obtener tareas");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// async function getTareas() {
//     try {
//         let response = await fetch('http://localhost:3001/tareas', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Error al obtener TAREAS');
//         }

//         let tareas = await response.json();
//         return tareas;
//     } catch (error) {
//         console.error('Error al obtener las TAREAS:', error);
//         throw error;
//     }
// }


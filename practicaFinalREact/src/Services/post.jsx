async function postUser(nombre, correo, password) {
    try {
        let nuevoUsuario = {
            nombre,
            correo,
            password
        };

        let response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });

        if (!response.ok) {
            throw new Error("No se pudo guardar el usuario");
        }

        let data = await response.json();
        console.log("Usuario guardado con éxito:", data);
    } catch (error) {
        console.error('No se pudo guardar el usuario:', error);
    }
}


export const postTareas = async (tarea) => {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarea),
        });
        if (!response.ok) {
            throw new Error('Error al agregar tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


// async function postTareas(tarea, tareaInput, prioridades) {
//     try {
//         let Tasks = {
//             tarea, 
//             tareaInput, 
//             prioridades
//         };


//         let response = await fetch('http://localhost:3001/tareas', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(Tasks)
//         });

//         if (!response.ok) {
//             throw new Error('No se pudo guardar el usuario');
//         }

//         let dataTareas = await response.json();
//         console.log('permiso guardado con éxito:', Tasks);
//         return dataTareas;

//     } catch (error) {
//         console.error('No se pudo guardar los permisos', error);
//     }
// }

export {postUser}
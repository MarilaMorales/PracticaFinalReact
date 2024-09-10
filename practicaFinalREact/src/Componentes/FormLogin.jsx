import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { getUsers } from "../Services/get";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();



  //se obtiene la lista de usuarios desde el db.json por el getUser y se almacena en el estado users.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const Login = async () => {
    setMessage('');

    if (!email || !password) {
      setMessage("Por favor llena todos los campos!");
      return;
    }

    try {
      const user = users.find(u => u.correo === email); //Se busca en users el usuario cuyo correo coincida con el ingresado 

      if (user) {
        if (user.password === password) { // Compara la contraseña ingresada con la almacenada en el usuario
          localStorage.setItem('Autentificado', 'true');
          setMessage('¡Éxito! Usuario entrando.');
          navigate("/tareas");
        } else {
          setMessage('Contraseña incorrecta.');
        }
      } else {
        setMessage('Este usuario no existe.');
      }
    } catch (error) {
      console.error("Error en el proceso de login:", error);
      setMessage('Error en ingreso de datos');
    }

    setEmail('');
    setPassword('');
  };

  const irRegistro = () => {
    navigate("/Registro");
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
          {message && <div id="mensajeAlert">{message}</div>}
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" style={{width: "185px"}} />
              <h4 className="mt-1 mb-5 pb-1">LOGIN</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='form1'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='form2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={Login}>Sign in</MDBBtn>
             
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger' onClick={irRegistro}>
                Register
              </MDBBtn>
            </div>
            
            
          </div>
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormLogin;


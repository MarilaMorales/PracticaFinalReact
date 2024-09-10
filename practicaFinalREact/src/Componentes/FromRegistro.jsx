import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCheckbox } from 'mdb-react-ui-kit';
import { postUser } from '../Services/post';
import { getUsers } from "../Services/get";
import { useNavigate } from "react-router-dom";
// import Mandala from "../IMG/Mandala.png"
import '../Styles/Registro.css';

function FormRegistro() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();



//el useEffect esta vacio para que solo lo haga 1 vez y no se encicle.
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



  const guardarUser = async (e) => {
    e.preventDefault();


    setMessage(''); 
  
    if (!username || !email || !password || !confirmPassword) {
      setMessage("No dejes campos en blanco");
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }
  
    // Verificar si el usuario ya existe
    const validarUser = users.find(user => user.correo === email);
  
    if (validarUser) {
      setMessage("Email ya se encuentra registrado");
      return;
    }
  
    try {

      const userObjeto = {
        nombre: username,
        correo: email,
        password: password
      };
  


      
      // Registrar nuevo usuario con el formato correcto
      await postUser(userObjeto);
      setMessage("¡Registro exitoso!");
      navigate("/login"); 
  
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      
    } catch (error) {
      console.error("Error en el Registro", error);
      setMessage("Error");
    }
  };





  return (
    <MDBContainer fluid className='my-5'>
      <MDBRow className='g-0 align-items-center'>
        <MDBCol md='6'>
          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <form onSubmit={guardarUser}>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Username'
                      id='username'
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Email'
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Confirm Password'
                  id='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox
                    name='flexCheck'
                    value=''
                    id='flexCheckDefault'
                    label='Subscribe to our newsletter'
                  />
                </div>

                <MDBBtn className='w-100 mb-4' size='md' type='submit'>
                  Sign up
                </MDBBtn>

                {message && <div className="alert" style={{ color: 'red' }}>{message}</div>}
              </form>

              <div className="text-center mt-4">
                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='6'>
          {/* <img src="Mandala" className="w-100 rounded-4 shadow-4 img-fluid" alt="Sample"/> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormRegistro;

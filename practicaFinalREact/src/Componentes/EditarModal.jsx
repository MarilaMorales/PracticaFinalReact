import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditarModal = ({ show, CerrarModal, tareaAEditar, onSave }) => {
    const [nuevaTarea, setNuevaTarea] = useState(tareaAEditar.tarea);
    const [nuevaPrioridad, setNuevaPrioridad] = useState(tareaAEditar.prioridad);

    const GuardarNuevaTarea = () => {
        if (nuevaTarea && nuevaPrioridad) {
            onSave({ ...tareaAEditar, tarea: nuevaTarea, prioridad: nuevaPrioridad });
            CerrarModal();
        }
    };

    return (
        <Modal show={show} onHide={CerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTarea">
                        <Form.Label>Tarea</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Edita la tarea"
                            value={nuevaTarea}
                            onChange={(e) => setNuevaTarea(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrioridad">
                        <Form.Label>Prioridad</Form.Label>
                        <Form.Control
                            as="select"
                            value={nuevaPrioridad}
                            onChange={(e) => setNuevaPrioridad(e.target.value)}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={CerrarModal}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={GuardarNuevaTarea}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditarModal;

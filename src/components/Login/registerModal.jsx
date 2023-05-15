import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { registerAction } from '../../redux/actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';

export function RegisterModal({ show, handleClose }) {
    const [data, setData] = useState({ email: '', password: '' })
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        validate(data)
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerAction(data))
    }

    const error = useSelector(state => state.loginReducer.user.errorRegister);

    const [err, setErr] = useState({ email: '', password: '' });

    const validate = values => {

        // Validar el campo del correo electrónico
        if (!values.email) {
            setErr({ ...err, email: 'Este campo es requerido' });
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            setErr({ ...err, email: 'El correo electrónico no es válido' });
        } else {
            setErr({ ...err, email: '' });
        }

        // Validar el campo de la contraseña
        if (!values.password) {
            setErr({ ...err, password: 'Este campo es requerido' });
        } else if (values.password.length < 4) {
            setErr({ ...err, password: 'La contraseña debe tener al menos 4 caracteres' });
        } else {
            setErr({ ...err, password: '' });
        }

    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                value={data.email}
                                onChange={handleInputChange}
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        {err.email ? (<div><span style={{ color: 'red' }}>{err.email}</span></div>) : null}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name='password'
                                value={data.password}
                                onChange={handleInputChange}
                                placeholder="Password" />
                        </Form.Group>
                        {err.password ? (<div><span style={{ color: 'red' }}>{err.password}</span></div>) : null}
                    </Form>
                    {error ? (<div><span style={{ color: 'red' }}>{error}</span></div>) : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        !err.email && !err.password ? (<Button variant="primary" type='submit' onClick={handleSubmit} >
                            Save Changes
                        </Button>) : <Button disabled variant="primary" type='submit' onClick={handleSubmit} >
                            Save Changes
                        </Button>

                    }


                </Modal.Footer>
            </Modal>
        </>
    );
}
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RegisterModal } from './registerModal';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/loginAction';

function Login() {
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: '', password: '' })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(data))
    }

    const error = useSelector(state => state.loginReducer.user.errorLogin);

    return (
        <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div style={{ width: '40rem', padding: '40px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' value={data.email} onChange={handleInputChange} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' value={data.password} onChange={handleInputChange} placeholder="Password" />
                    </Form.Group>
                    {error ? (<div><span style={{ color: 'red' }}>{error}</span></div>) : null}
                    <Button style={{ float: 'right' }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <div>No tenes una cuenta?</div> <Button onClick={handleShow} style={{ color: 'blue' }} variant='Link'>Registrate</Button>
                </div>
            </div>
            <RegisterModal show={show} handleClose={handleClose} handleShow={handleShow} ></RegisterModal>
        </div>
    );
}

export default Login;
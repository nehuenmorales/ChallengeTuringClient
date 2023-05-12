import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/actions/taskAction";
import Button from 'react-bootstrap/Button';
import { FormularioConReduxForm } from "./Taskform";
import { postTask } from '../../redux/actions/taskAction'


export function Home() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskReducer.tasks)
    const email = useSelector(state => state.loginReducer.user.email);


    useEffect(() => {
        dispatch(getAllTasks(email));
    }, []);

    const handleSubmit = (values) => {
        if (!values.date || !values.description) { return; }

        dispatch(postTask(values, email))
    };

    return (
        <div className="container" style={{ marginTop: '40px' }}>

            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
                <FormularioConReduxForm onSubmit={handleSubmit} ></FormularioConReduxForm>
            </div>
            <div style={{ margin: '5px' }}>
                <h3>Mis tareas</h3>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((e) => {
                        return (
                            <tr>
                                <td>{e.date}</td>
                                <td>{e.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}
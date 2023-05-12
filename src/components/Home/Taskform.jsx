import React from 'react';
import { Field, reduxForm } from 'redux-form';



export const TaskForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="container border border-2 rounded p-4">
                <div className="mb-4">
                    <label htmlFor="description">Fecha</label>
                    <Field
                        name="date"
                        component='input'
                        type="date"
                    />
                </div>
                <div className="mb-4" >
                    <label htmlFor="description">Descripcion</label>
                    <Field
                        name="description"
                        component='input'
                        type="text"
                        placeholder="Description"
                    />
                </div>
                <button type="submit">Crear</button>
            </div>
        </form>
    );
};

export const FormularioConReduxForm = reduxForm({
    form: 'miFormulario',
})(TaskForm);

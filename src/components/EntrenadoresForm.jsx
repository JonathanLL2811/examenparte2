import React, { useState } from 'react';
import axios from 'axios';

export const EntrenadoresForm = () => {
    const [dataForm, setDataForm] = useState({
        id:"",
        nombre: "",
        especialidad: "",
        correo: ""
    });

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/entrenadores"; 
        try {
            const result = await axios.post(url, dataForm);
            const dataResult = result.data;
            setResultado(dataResult.mensaje + ' id: ' + dataResult.obj_creado.id);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setResultado("Error al enviar el formulario");
        }
    }

    return (
        <>
            <h1>Formulario de Entrenadores</h1>
            <form onSubmit={submitHandler}>
                <input name='nombre' placeholder='Nombre' onChange={changeHandler} />
                <input name='especialidad' placeholder='Especialidad' onChange={changeHandler} />
                <input name='correo' placeholder='Correo' onChange={changeHandler} />
                <button type='submit'>Enviar</button>
            </form>
            <p>{resultado}</p>
        </>
    );
};

export default EntrenadoresForm;

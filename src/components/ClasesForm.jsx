import React, { useState } from 'react';
import axios from 'axios';

export const ClasesForm = () => {
    const [dataForm, setDataForm] = useState({
        nombre: "",
        horario: "",
        duracion: ""
    });

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/clases"; 
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
            <h1>Formulario de Clases</h1>
            <form onSubmit={submitHandler}>
                <input name='nombre' placeholder='Nombre' onChange={changeHandler} />
                <input name='horario' placeholder='Horario' onChange={changeHandler} />
                <input name='duracion' placeholder='Duración' onChange={changeHandler} />
                <button type='submit'>Enviar</button>
            </form>
            <p>{resultado}</p>
        </>
    );
};

export default ClasesForm;

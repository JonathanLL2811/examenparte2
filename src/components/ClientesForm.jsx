import React, { useState } from 'react';
import axios from 'axios';

export const ClientesForm = () => {
    const [dataForm, setDataForm] = useState({
        nombre: "",
        edad: "",
        correo: ""
    });

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/Api/clientes"; 
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
        <div className="container mt-5">
            <h1 className="text-center mb-4">Formulario de Clientes</h1>
            <form onSubmit={submitHandler} className="border p-4 shadow-sm rounded">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        className="form-control" 
                        placeholder="Nombre" 
                        onChange={changeHandler} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input 
                        type="number" 
                        name="edad" 
                        className="form-control" 
                        placeholder="Edad" 
                        onChange={changeHandler} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input 
                        type="email" 
                        name="correo" 
                        className="form-control" 
                        placeholder="Correo" 
                        onChange={changeHandler} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
            {resultado && <p className="mt-3 text-center">{resultado}</p>}
        </div>
    );
};
export default ClientesForm;

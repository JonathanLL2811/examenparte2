import React, { useState } from 'react';
import axios from 'axios';

export const MembresiasForm = () => {
    const [dataForm, setDataForm] = useState({
        nombre: "",
        precio: "",
        duracion: ""
    });

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/membresias"; 
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
            <h1 className="text-center mb-4">Formulario de Membresías</h1>
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
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input 
                        type="number" 
                        name="precio" 
                        className="form-control" 
                        placeholder="Precio" 
                        onChange={changeHandler} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="duracion" className="form-label">Duración</label>
                    <input 
                        type="text" 
                        name="duracion" 
                        className="form-control" 
                        placeholder="Duración" 
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

export default MembresiasForm;

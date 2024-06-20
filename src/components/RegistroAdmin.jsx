import React, { useState } from 'react';
import axios from 'axios';

export const RegistroAdmin = () => {
    const [registro, setRegistro] = useState({
        nombre: "",
        correo: "",
        contraseña: ""
    });

    const [resultado, setResultado] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegistro({ ...registro, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/administradores";

        try {
            const result = await axios.post(url, registro);
            const mensaje = result.data.message;
            setResultado(mensaje);
        } catch (error) {
            console.error("Error al registrar administrador:", error);
            setResultado("Error al registrar administrador");
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Registro de Administrador</h1>
            <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        className="form-control" 
                        placeholder="Nombre" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                    <input 
                        type="email" 
                        name="correo" 
                        className="form-control" 
                        placeholder="Correo electrónico" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        name="contraseña" 
                        className="form-control" 
                        placeholder="Contraseña" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
            {resultado && <p className="mt-3 text-center">{resultado}</p>}
        </div>
    );
};


export default RegistroAdmin;

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
        const url = "http://localhost:3000/api/registroadmin";

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
        <>
            <h1>Registro de Administrador</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
                <input type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} />
                <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
            <p>{resultado}</p>
        </>
    );
};

export default RegistroAdmin;

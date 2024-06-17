import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        correo: "",
        contraseña: ""
    });

    const [resultado, setResultado] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/api/login";

        try {
            const result = await axios.post(url, credentials);
            const token = result.data.token;
            localStorage.setItem('token', token); // Guardar el token en el localStorage
            setResultado("Inicio de sesión exitoso");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setResultado("Credenciales inválidas");
        }
    }

    return (
        <>
            <h1>Inicio de Sesión</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} />
                <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>{resultado}</p>
        </>
    );
};

export default LoginForm;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        correo: "",
        contraseña: ""
    });

    const [resultado, setResultado] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:5000/api/login";

        try {
            const result = await axios.post(url, credentials);
            const token = result.data.token;
            localStorage.setItem('token', token); // Guardar el token en el localStorage
            setResultado("Inicio de sesión exitoso");
            onLogin(); // Actualizar el estado de isLoggedIn en App
            navigate('/clientes'); // Redirigir a una ruta protegida después de iniciar sesión
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setResultado("Credenciales inválidas");
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Inicio de Sesión</h1>
            <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
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
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
            {resultado && <p className="mt-3 text-center">{resultado}</p>}
        </div>
    );
};
export default LoginForm;

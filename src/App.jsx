import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistroAdmin from './components/RegistroAdmin';
import ClientesForm from './components/ClientesForm';
import TablaClientes from './components/TablaClientes';
import ClasesForm from './components/ClasesForm';
import ClasesTabla from './components/ClasesTabla';
import EntrenadoresForm from './components/EntrenadoresForm';
import EntrenadoresTabla from './components/EntrenadoresTabla';
import MembresiasForm from './components/MembresiasForm';
import MembresiasTabla from './components/MembresiasTabla';
import './App.css'; // Importar archivo CSS para estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Establece isLoggedIn a true si hay un token en localStorage
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Actualiza el estado de isLoggedIn al cerrar sesión
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Examen 2 Jonathan Lorenzana</h1>
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
          ) : (
            <>
              <Link to="/" className="btn btn-primary">Iniciar Sesión</Link>
              <Link to="/registro" className="btn btn-secondary">Registrar</Link>
            </>
          )}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/registro" element={<RegistroAdmin />} />
            {isLoggedIn && (
              <>
                <Route path="/clientes" element={<ClientesForm />} />
                <Route path="/api/clientes" element={<TablaClientes />} />
                <Route path="/clases" element={<ClasesForm />} />
                <Route path="/api/clases" element={<ClasesTabla />} />
                <Route path="/entrenadores" element={<EntrenadoresForm />} />
                <Route path="/api/entrenadores" element={<EntrenadoresTabla />} />
                <Route path="/membresias" element={<MembresiasForm />} />
                <Route path="/api/membresias" element={<MembresiasTabla />} />
              </>
            )}
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Jonathan Jesus Lorenzana Lemus</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setIsLoggedIn(!!token); // Establece isLoggedIn a true si hay un token en localStorage
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false); // Actualiza el estado de isLoggedIn al cerrar sesión
    return <Navigate to="/" replace={true} />; // Redirige al inicio de sesión después de cerrar sesión
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Aplicación con Rutas Protegidas</h1>
          {isLoggedIn && (
            <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
          )}
        </header>

        <main>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/registro" element={<RegistroAdmin />} />
                <Route path="/clientes" element={<ClientesForm />} />
                <Route path="/api/clientes" element={<TablaClientes />} />
                <Route path="/clases" element={<ClasesForm />} />
                <Route path="/api/clases" element={<ClasesTabla />} />
                <Route path="/entrenadores" element={<EntrenadoresForm />} />
                <Route path="/api/entrenadores" element={<EntrenadoresTabla />} />
                <Route path="/membresias" element={<MembresiasForm />} />
                <Route path="/api/membresias" element={<MembresiasTabla />} />
              </>
            ) : (
              <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
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

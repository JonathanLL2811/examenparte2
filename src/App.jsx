
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClientesForm } from './components/ClientesForm';
import { TablaClientes } from './components/TablaClientes'; // Ajusta la ruta según la ubicación del archivo

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<ClientesForm />} />
        <Route path='/tablaclientes' element={<TablaClientes />} /> {/* Nueva ruta para la tabla de clientes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


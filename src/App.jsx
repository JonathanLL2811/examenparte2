
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClientesForm } from './components/ClientesForm';
import { TablaClientes } from './components/TablaClientes'; // Ajusta la ruta según la ubicación del archivo
import { ClasesForm } from './components/ClasesForm';
import { ClasesTabla } from './components/ClasesTabla'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<ClientesForm />} />
        <Route path='/tablaclientes' element={<TablaClientes />} /> {/* Nueva ruta para la tabla de clientes */}
        <Route path='/clases' element={<ClasesForm />} />
        <Route path='/clases-tabla' element={<ClasesTabla />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;


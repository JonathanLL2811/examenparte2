
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClientesForm } from './components/ClientesForm';
import { TablaClientes } from './components/TablaClientes'; // Ajusta la ruta según la ubicación del archivo
import { ClasesForm } from './components/ClasesForm';
import { ClasesTabla } from './components/ClasesTabla'
import { EntrenadoresForm } from './components/EntrenadoresForm';
import { EntrenadoresTabla } from './components/EntrenadoresTabla';
import { MembresiasForm } from './components/MembresiasForm';
import { MembresiasTabla } from './components/MembresiasTabla';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<ClientesForm />} />
        <Route path='/tablaclientes' element={<TablaClientes />} /> {/* Nueva ruta para la tabla de clientes */}
        <Route path='/clases' element={<ClasesForm />} />
        <Route path='/clases-tabla' element={<ClasesTabla />} />
        <Route path='/entrenadores' element={<EntrenadoresForm />} />
        <Route path='/entrenadores-tabla' element={<EntrenadoresTabla />} />
        <Route path='/membresias' element={<MembresiasForm />} />
          <Route path='/membresias-tabla' element={<MembresiasTabla />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;


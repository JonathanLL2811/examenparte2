
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClientesForm } from './components/ClientesForm';
import { TablaClientes } from './components/TablaClientes'; 
import { ClasesForm } from './components/ClasesForm';
import { ClasesTabla } from './components/ClasesTabla'
import { EntrenadoresForm } from './components/EntrenadoresForm';
import { EntrenadoresTabla } from './components/EntrenadoresTabla';
import { MembresiasForm } from './components/MembresiasForm';
import { MembresiasTabla } from './components/MembresiasTabla';
import { LoginForm } from './components/LoginForm';
import { RegistroAdmin } from './components/RegistroAdmin';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/registro' element={<RegistroAdmin />} />
        <Route path='/clientes' element={<ClientesForm />} />
        <Route path='/tablaclientes' element={<TablaClientes />} /> 
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


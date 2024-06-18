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
import ProtectedRoute from './components/ProtectedRoute';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/registro' element={<RegistroAdmin />} />
        <Route path='/clientes' element={<ProtectedRoute><ClientesForm /></ProtectedRoute>} />
        <Route path='/api/clientes' element={<ProtectedRoute><TablaClientes /></ProtectedRoute>} />
        <Route path='/clases' element={<ProtectedRoute><ClasesForm /></ProtectedRoute>} />

        <Route path='/api/clases' element={<ProtectedRoute><ClasesTabla /></ProtectedRoute>} />   // no funciona...

        <Route path='/api/entrenadores' element={<ProtectedRoute><EntrenadoresForm /></ProtectedRoute>} />
        <Route path='/entrenadores-tabla' element={<ProtectedRoute><EntrenadoresTabla /></ProtectedRoute>} />
        <Route path='/membresias' element={<ProtectedRoute><MembresiasForm /></ProtectedRoute>} />


        <Route path='/membresias-tabla' element={<ProtectedRoute><MembresiasTabla /></ProtectedRoute>} /> // no funciona...


      </Routes>
    </BrowserRouter>
  );
};


export default App;


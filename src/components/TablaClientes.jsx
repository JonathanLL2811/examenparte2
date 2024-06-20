import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TablaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarClientes = async (pag) => {
    try {
      const url = `http://localhost:5000/api/clientes`;
      const result = await axios.get(url);
      const clientesData = result.data;
      setClientes(clientesData);
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  const handlerClick = (pag) => {
    setPagina(pag);
  };

  useEffect(() => {
    cargarClientes(pagina);
  }, [pagina]);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Lista de Clientes - Página {pagina}</h3>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary me-2" onClick={() => handlerClick(1)}>1</button>
        <button className="btn btn-primary" onClick={() => handlerClick(2)}>2</button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.edad}</td>
                <td>{cliente.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TablaClientes;

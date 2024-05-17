import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TablaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarClientes = async (pag) => {
    try {
      const url = `http://localhost:3000/clientes?page=${pag}`; // Ajusta la URL según la ruta de tu API
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
    <>
      <h3>Lista de Clientes - Página {pagina}</h3>
      <button onClick={() => handlerClick(1)}>1</button>
      <button onClick={() => handlerClick(2)}>2</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

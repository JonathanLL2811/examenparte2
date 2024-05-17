import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MembresiasTabla = () => {
  const [membresias, setMembresias] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarMembresias = async (pag) => {
    try {
      const url = `http://localhost:3000/membresias?page=${pag}`; // Ajusta la URL según la ruta de tu API
      const result = await axios.get(url);
      const membresiasData = result.data;
      setMembresias(membresiasData);
    } catch (error) {
      console.error("Error al cargar membresías:", error);
    }
  };

  const handlerClick = (pag) => {
    setPagina(pag);
  };

  useEffect(() => {
    cargarMembresias(pagina);
  }, [pagina]);

  return (
    <>
      <h3>Lista de Membresías - Página {pagina}</h3>
      <button onClick={() => handlerClick(1)}>1</button>
      <button onClick={() => handlerClick(2)}>2</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {membresias.map((membresia) => (
            <tr key={membresia.id}>
              <td>{membresia.id}</td>
              <td>{membresia.nombre}</td>
              <td>{membresia.precio}</td>
              <td>{membresia.duracion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MembresiasTabla;

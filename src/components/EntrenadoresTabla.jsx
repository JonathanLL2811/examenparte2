import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EntrenadoresTabla = () => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarEntrenadores = async (pag) => {
    try {
      const url = `http://localhost:3000/entrenadores?page=${pag}`; // Ajusta la URL según la ruta de tu API
      const result = await axios.get(url);
      const entrenadoresData = result.data;
      setEntrenadores(entrenadoresData);
    } catch (error) {
      console.error("Error al cargar entrenadores:", error);
    }
  };

  const handlerClick = (pag) => {
    setPagina(pag);
  };

  useEffect(() => {
    cargarEntrenadores(pagina);
  }, [pagina]);

  return (
    <>
      <h3>Lista de Entrenadores - Página {pagina}</h3>
      <button onClick={() => handlerClick(1)}>1</button>
      <button onClick={() => handlerClick(2)}>2</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {entrenadores.map((entrenador) => (
            <tr key={entrenador.id}>
              <td>{entrenador.id}</td>
              <td>{entrenador.nombre}</td>
              <td>{entrenador.especialidad}</td>
              <td>{entrenador.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EntrenadoresTabla;

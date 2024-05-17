import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ClasesTabla = () => {
  const [clases, setClases] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarClases = async (pag) => {
    try {
      const url = `http://localhost:3000/clases?page=${pag}`; // Ajusta la URL según la ruta de tu API
      const result = await axios.get(url);
      const clasesData = result.data;
      setClases(clasesData);
    } catch (error) {
      console.error("Error al cargar clases:", error);
    }
  };

  const handlerClick = (pag) => {
    setPagina(pag);
  };

  useEffect(() => {
    cargarClases(pagina);
  }, [pagina]);

  return (
    <>
      <h3>Lista de Clases - Página {pagina}</h3>
      <button onClick={() => handlerClick(1)}>1</button>
      <button onClick={() => handlerClick(2)}>2</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Horario</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((clase) => (
            <tr key={clase.id}>
              <td>{clase.id}</td>
              <td>{clase.nombre}</td>
              <td>{clase.horario}</td>
              <td>{clase.duracion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClasesTabla;


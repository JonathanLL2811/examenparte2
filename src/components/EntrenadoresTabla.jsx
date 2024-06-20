import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EntrenadoresTabla = () => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarEntrenadores = async (pag) => {
    try {
      const url = `http://localhost:5000/api/entrenadores`; 
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
    <div className="container mt-5">
      <h3 className="text-center mb-4">Lista de Entrenadores - Página {pagina}</h3>
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
      </div>
    </div>
  );
};
export default EntrenadoresTabla;

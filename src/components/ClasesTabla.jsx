import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ClasesTabla = () => {
  const [clases, setClases] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarClases = async (pag) => {
    try {
      const url = `http://localhost:5000/api/clases`; 
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
    <div className="container mt-5">
      <h3 className="text-center mb-4">Lista de Clases - Página {pagina}</h3>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary me-2" onClick={() => handlerClick(1)}>1</button>
        <button className="btn btn-primary" onClick={() => handlerClick(2)}>2</button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
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
      </div>
    </div>
  );
};
export default ClasesTabla;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MembresiasTabla = () => {
  const [membresias, setMembresias] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarMembresias = async (pag) => {
    try {
      const url = `http://localhost:5000/api/membresias`; 
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
    <div className="container mt-5">
      <h3 className="text-center mb-4">Lista de Membresías - Página {pagina}</h3>
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
      </div>
    </div>
  );
};


export default MembresiasTabla;

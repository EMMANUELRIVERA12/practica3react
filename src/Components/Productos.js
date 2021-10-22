import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Productos = (props) => {
  return (
    <div className="Productoss">
      <h4>Productos</h4>
      <table className="table table-striped table-dark" >
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.ProductosLista.map((elemento, index) => (
            <tr key={index}>
              <td>{elemento.codigo}</td>
              <td>{elemento.descripcion}</td>
              <td>
                <img src={elemento.url} width="45" height="40" alt="no img"/>
              </td>
              <td>${elemento.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </td><td><button onClick={() => props.agregar(elemento)}>Agregar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;

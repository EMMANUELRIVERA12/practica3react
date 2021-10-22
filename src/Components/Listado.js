import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Listado = (props) => {
  return (
    <div className="Listados">
      <h4>Mi Carrito</h4>
      {props.lista.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <div>
          <div className="Contenedor2">
            <p>
              Total:${props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
            </p>
          </div>

          <table className="table table-dark">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.lista.map((p, index) => (
                <tr key={index}>
                  <td>{p.cantidad}</td>
                  <td>{p.codigo}</td>
                  <td>{p.descripcion}</td>
                  <td>${p.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                  <td>${(p.cantidad * p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                  <td><button onClick={() => props.eliminar(p, index)}>eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Listado;
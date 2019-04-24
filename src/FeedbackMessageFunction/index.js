import React from 'react'


// puedo exportar el metodo/clase, en su misma definición
// Un componente creado como metodo, recibe las propiedades como parametro
export default function (propiedades){
  return (
    <div>
      <h1>Componente FeedbackMessageFunction!</h1>
      <p>Soy un componentes generado a partir de una funcion!</p>
      <p>Recibo las propiedades como parametro.</p>
      <p>Hola {propiedades.nombre}, estás en {propiedades.app}</p>
    </div>
  )
}
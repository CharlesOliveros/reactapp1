import React from 'react'


// puedo exportar el metodo/clase, en su misma definición
// Un componente creado como metodo, recibe las propiedades como parametro
export default function (propiedades){
  return (
    <div>
      <p>Soy un componente de función!</p>
      <p>Hola {propiedades.nombre}, estás en {propiedades.app}</p>
    </div>
  )
}
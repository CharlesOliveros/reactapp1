import React from 'react';

/*
 Componente sin estado creado a partir de una funcion, que recibe un timestamp
 como propiedad y genera  una vista donde ese instante se muestra convertido en 
 una fecha en español. 

 SOLO podemos crear componentes sin estado usando una funcion.

 El componente tiene nombre. El nombre se lo asignamos a la hora de importarlo,
 ya que se esta exportando al mismo tiempo que se define.
*/

export default function (props) {
    var date = new Date(parseInt(props.timestamp, 10));
    var fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return (
        <div>
            <h1>Componente TimestampToDate!</h1>
            <span>{fecha}</span>
        </div>
    );
}
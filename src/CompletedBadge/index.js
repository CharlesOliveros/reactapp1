import React from 'react';
import './CompletedBadge.css';

const CompletedBadge = (props) => {
  return props.completed
    ? <h1 className="Badge Badge-completed">Componente Completado</h1>
    : <h1 className="Badge Badge-incompleted">Componente Incompleto</h1>
}
export default CompletedBadge;
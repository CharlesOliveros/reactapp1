import React from 'react'

export default class CicloVida extends React.Component {
  constructor(...args) {
    super(...args)
    console.log('Ejecuto constructor', ...args)
    this.state = {
      estado: 'Inicializado en el constructor'
    }
  }

  render() {
    return (
      <div>
        <h1>Componente CicloVida</h1>
        <p>Componente con propiedades y estado inicializado</p>
        <p>Estado: {this.state.estado}</p>
        <p>Propiedad: {this.props.propiedad}</p>
      </div>
    )
  }
}

CicloVida.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}

/**
 * CicloVida.defaultProps:
 * la inicialización de propiedades se hace una vez definida la clase, 
 * mediante una propiedad que usamos dentro de la propia clase. 
 * Al no estar en el código de la clase, se ejecutará una única vez.
 */

 /**
  * Ya para la inicialización de estado, se define en el constructor, 
  * con lo que se ejecutará para cada componente instanciado 
  * de manera independiente.
  */
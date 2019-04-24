import React from 'react'

export default class CicloVida extends React.Component {
  constructor(...args) {
    super(...args)
    console.log('Ejecuto constructor', ...args)
    this.state = {
      estado: 'Inicializado en el constructor',
      showTitle: true
    }
  }

  componentWillMount() {
    console.log('Se ejecuta componentWillMount')
  }

  componentDidMount() {
    console.log('Se ejecuta componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)    
  }

  componentWillUnmount() {
    console.log('Se desmonta el componente...')
  }

  cambiarEstado() {
    this.setState({
      estado: 'Otro valor para "estado"'
    })
  }

  mostrarTitulo() {
    this.setState(prevState => {
      return { showTitle: !prevState.showTitle };
    });
  }

  mostrarAlerta(e) {
    e.preventDefault();
    alert('Has hecho clic!!');
  }

  render() {
    return (
      <div>
        { this.state.showTitle 
            ? <h1>Componente CicloVida</h1>
            : <h1>---</h1>
        }
        <p>Componente con propiedades y estado inicializado</p>
        <p>Estado: {this.state.estado}</p>
        <p>Propiedad: {this.props.propiedad}</p>
        <p>
            <button onClick={this.cambiarEstado.bind(this)}>Cambiar estado </button> 
            <button onClick={this.mostrarAlerta}> Mostrar Alerta </button>
            <button onClick={this.mostrarTitulo.bind(this)}> Mostrar Titulo </button>
        </p>
      </div>
    )
  }
}

CicloVida.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}

/**
 * Bindear funcion:
 * Permite acceder a las propiedades y estado de un componnete desde una
 * funcion del mismo:
 *  onClick={this.cambiarEstado.bind(this)}
 */

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
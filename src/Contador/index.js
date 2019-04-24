import React from 'react'

/** 
 Componente creado a partir de una clase que se exporta en su misma definicion.

 El valor actual del contador será nuestro estado y lo tendremos que inicializar 
 en el constructor.

 Para manipular estados tenemos que inicializarlos, y para ello usamos un constructor.

*/

export default class Contador extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      contador: 0
    }
  }

  /**
   * incrementar()
   * nos basamos en el estado actual del contador, para incrementarlo en una unidad. 
   * Pero no sabemos realmente cuándo se va a ejecutar this.setState. 
   * Recordemos que react (Node) trabaja de forma asincrona.
   * Por ello, podría ocurrir que ese incremento se realice a partir de un valor
   * del estado que no era realmente el válido.
   */

  incrementar() {
    this.setState({
      contador: this.state.contador + 1
    })
  }


  /**
   * incrementarprevState():
   * Como puedes ver, en lugar de enviarle un objeto a setState() 
   * le estamos enviando una función. Esa función es capaz de recibir 
   * como parámetro el estado actual. Entonces, el nuevo estado lo calculo 
   * en función del estado actual.
   */
  
  incrementarprevState() {
    this.setState(prevState => {
      return { contador: prevState.contador + 1};
    });
  }

  render() {
    return (
      <div>
        <h1>Bienvenido a Contador!</h1>
        <span>Cuenta actual: {this.state.contador} </span> 
        <button onClick={this.incrementarprevState.bind(this)}> + </button>
      </div>
    )
  }
}
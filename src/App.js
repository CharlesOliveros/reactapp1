import React, { Component } from 'react';
import FeedbackMessage from './FeedbackMessage'
import FeedbackMessageFunction from './FeedbackMessageFunction'
import TimestampToDate from './TimestampToDate'
import Contador from './Contador'
import CicloVida from './CicloVida'



class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo!</h1>
        <p>
          Soy el componente  principal App.js,
          Bienvenidos a los primeros pasos con React.
        </p>
        <OtroSaludo />
        <FeedbackMessage />
        <FeedbackMessage nombre="Charles Oliveros" app="Mi App React" />
        <FeedbackMessageFunction nombre="Charles Oliveros" app="Mi App React" />
        <TimestampToDate timestamp={1475700297974} />
        <Contador />
        <CicloVida />
        <CicloVida propiedad="Propiedad inicializada desde la instancia!"/>
      </div>
    );
  }
}

class OtroSaludo extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido a OtroSaludo!</h1>
          <p>
            Soy otro componente generado a partir de una clase, definido dentro 
            del componente principal App.js
          </p>
      </div>
    )
  }
}

export default App;

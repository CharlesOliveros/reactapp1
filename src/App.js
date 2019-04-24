import React, { Component } from 'react';
import FeedbackMessage from './FeedbackMessage'
import FeedbackMessageFunction from './FeedbackMessageFunction'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo!</h1>
        <p>Bienvenidos a los primeros pasos con React</p>
        <OtroSaludo />
        <FeedbackMessage />
        <FeedbackMessage nombre="Charles Oliveros" app="Mi App React" />
        <FeedbackMessageFunction nombre="Charles Oliveros" app="Mi App React" />
      </div>
    );
  }
}

class OtroSaludo extends Component {
  render() {
    return (
      <p>Hola desde otro componente</p>
    )
  }
}

export default App;

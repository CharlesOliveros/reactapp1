import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo!</h1>
        <p>Bienvenidos a los primeros pasos con React</p>
        <OtroSaludo />
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

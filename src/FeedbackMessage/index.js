import React, { Component } from 'react';

class FeedbackMessage extends Component {
    render() {
        return (
            <div>
                <h1>Componente FeedbackMessage!</h1>
                <p>
                    Soy un componente generado a partir de una clase!.
                </p>
                <p>
                    Fui creado en un modulo aparte y accedo a mis propiedades con "this.props".
                </p>
                <p>
                    Mis propiedades son "nombre" y "app", y las imprimo en el siguiente parrafo:
                </p>
                <p>Bienvenido! {this.props.nombre} a {this.props.app}</p>
            </div>
        )
    } 
}

export default FeedbackMessage
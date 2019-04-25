import React from 'react';
import RepeatComponentItem from '../RepeatComponentItem'

class RepeatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      lenguajes: ['Javascript', 'JSX', 'Typescript', 'NodeJS']
    }
  }
  render() { 
    return (
      <div>
        <h1>Componente con Repeticiones</h1>
        <ul>
            {this.state.lenguajes.map(item => <li>{item}</li>)}
        </ul>
        <br/>
        {
            this.state.lenguajes.map(
                (item,index) => <RepeatComponentItem key={index} item={item}/>
            )
        }
      </div>
    );
  }
}

export default RepeatComponent;
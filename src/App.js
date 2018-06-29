import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 12 },
      { name: 'Mix', age: 22 },
      { name: 'Mux', age: 32 },
    ]
  }

  switchNameHandler = (newName) =>
  {
    // console.log('yoooooo');
    //DON'T DO THIS: this.state.people[0].name = '';
    this.setState({
      people: [
        { name: newName, age: 12 },
        { name: 'Mix', age: 22 },
        { name: 'Mux', age: 32 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Yo I'm react app.</h1>
        <p>works</p>
        <button onClick={this.switchNameHandler.bind(this, 'Mookie')}>switch name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Brick')}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'ey, I\'m');
  }
}

export default App;

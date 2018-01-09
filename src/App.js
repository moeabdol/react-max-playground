import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mohammad', age: 35 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'moe', age: 35 },
        { name: 'joe', age: 36 },
        { name: 'doe', age: 37 }
      ]
    });
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'moe', age: 35 },
        { name: event.target.value, age: 36 },
        { name: 'doe', age: 37 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}>
            Hobbies: Football
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I&apos;m a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

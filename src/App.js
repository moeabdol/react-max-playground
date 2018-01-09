import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mohammad', age: 35 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I&apos;m a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        >
          Hobbies: Football
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

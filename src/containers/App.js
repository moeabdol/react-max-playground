import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from '../components/persons/person/person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Mohammad', age: 35 },
      { id: '2', name: 'Max', age: 28 },
      { id: '3', name: 'Stephanie', age: 26 },
      { id: '4', name: 'Hello, World!', age: 25 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    // or
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)} />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I&apos;m a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

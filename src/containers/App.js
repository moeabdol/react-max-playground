import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './app.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor()', props);
    this.state = {
      persons: [
        { id: '1', name: 'Mohammad', age: 35 },
        { id: '2', name: 'Max', age: 28 },
        { id: '3', name: 'Stephanie', age: 26 },
        { id: '4', name: 'Hello, World!', age: 25 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

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
    console.log('[App.js] inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className={classes.app}>
          <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

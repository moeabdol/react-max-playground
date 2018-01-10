import React, { Component } from 'react';
import Person from './person/person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[persons.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update] persons.js Inside comopnentWillReceiveProps',
      nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update] persons.js Inside shouldComponentUpdate()',
      nextProps, nextState);
    return nextProps.persons !== this.props.persons;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update] persons.js Inside componentWillUpdate()', nextProps,
      nextState);
  }

  componentDidUpdate() {
    console.log('[Update] persons.js Inside componentDidUpdate()');
  }

  render() {
    console.log('[persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={event => this.props.changed(event, person.id)} />;
    });
  }
}

export default Persons;

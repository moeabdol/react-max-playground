import React from 'react';
import classes from './cockpit.css';

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) btnClass = classes.Red;
  if (props.persons.length <= 2) assignedClasses.push(classes.red);
  if (props.persons.length <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.cockpit}>
      <h1>Hi, I&apos;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;

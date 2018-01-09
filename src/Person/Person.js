import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <p>I&apos;m {props.name} and I&apos;m {props.age} years old</p>
      {props.children ? <p>{props.children}</p> : false}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

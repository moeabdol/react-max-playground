import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I&apos;m {props.name} and I&apos;m {props.age} years old</p>
      {props.children ? <p>{props.children}</p> : false}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);

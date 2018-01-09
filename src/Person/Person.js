import React from 'react';

const person = props => {
  return (
    <div onClick={props.click}>
      <p>I&apos;m {props.name} and I&apos;m {props.age} years old</p>
      {props.children ? <p>{props.children}</p> : false}
    </div>
  );
};

export default person;

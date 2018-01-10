import React, { Component } from 'react';
import classes from './person.css';

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I&apos;m {this.props.name} and I&apos;m {this.props.age} years old</p>
        {this.props.children ? <p>{this.props.children}</p> : false}
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;

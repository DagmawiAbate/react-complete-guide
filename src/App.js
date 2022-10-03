import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name='Dagi' age='24' />
        <Person name='Muluhabt' age='23'>My Hobbies: Football</Person>
        <Person name='Kate' age='21' />
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App

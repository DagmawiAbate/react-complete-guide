import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Dagi', age: '24' },
      { name: 'Muluhabet', age: '23' },
      { name: 'Kate', age: '21' }
    ]
  })

  const [ otherState, setOtherState ] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Dagmawi'
    setPersonsState({
      persons: [
        { name: 'Dagmawi', age: '24' },
        { name: 'Muluhabet', age: '23' },
        { name: 'Kate', age: '20' }
      ],
      otherState: personsState.otherState
    })
  }

  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My Hobbies: Football
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default app



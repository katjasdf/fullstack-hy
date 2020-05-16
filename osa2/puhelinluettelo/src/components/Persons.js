import React from 'react'
import Person from './Person'

const Persons = ({personList}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {personList.map(person => 
                <Person person={person.name} number={person.number} key={person.name}/>
            )}
        </div>
    )
}

export default Persons
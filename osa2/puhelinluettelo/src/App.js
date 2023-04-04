import { useState } from 'react'
import Persons from './components/Persons'
import AddForm from './components/AddForm'
import FilterForm from './components/FilterForm'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1231244' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [keyword, setKeyword] = useState('')
  
    const addPerson = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name)
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) => { setNewName(event.target.value) }
    const handleNumberChange = (event) => { setNewNumber(event.target.value) }
    const handleFiltering = (event) => { setKeyword(event.target.value) }

    const personList = keyword === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase()))

    return (
      <div>
        <h2>Phonebook</h2>
        <FilterForm
            keyword={keyword}
            handleFiltering={handleFiltering}
        />
        <AddForm 
            addPerson={addPerson} 
            newName={newName} 
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
        />
        <Persons
            personList={personList}
        />
      </div>
    )
  
  }
  
  export default App

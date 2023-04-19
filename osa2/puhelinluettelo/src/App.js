import { useState, useEffect } from 'react'
import { getAll, create, update, remove } from './services/persons'

import Persons from './components/Persons'
import AddForm from './components/AddForm'
import FilterForm from './components/FilterForm'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [keyword, setKeyword] = useState('')
    const [notificationData, setNotificationData] = useState({message: '', personName: ''})

    useEffect(() => {
        getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
  
    const addPerson = (event) => {
        event.preventDefault()
        const foundPerson = persons.find(p => p.name === newName)
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (!!foundPerson) {
            window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with new one?`)
            && update(foundPerson.id, personObject)
                .then(updatedPerson => {
                    setPersons(persons.map(person => person.id !== foundPerson.id ? person : updatedPerson))
                    setNewName('')
                    setNewNumber('')
                })
                .then(
                    setNotificationData({message: 'update', personName: newName}),
                    setTimeout(() => {
                        setNotificationData({message: '', personName: ''})
                    }, 5000)
                )
        } else {
            create(personObject)
                .then(newPerson => {
                    setPersons(persons.concat(newPerson))
                    setNewName('')
                    setNewNumber('')
                })
                .then(
                    setNotificationData({message: 'add', personName: newName}),
                    setTimeout(() => {
                        setNotificationData({message: '', personName: ''})
                    }, 5000)
                )
        }
    }

    const handleRemovingPerson = (person) => {
        window.confirm(`Do you really want to delete ${person.name}?`)
        && remove(person.id)
            .then(
                setPersons(personList.filter(n => n.id !== person.id))   
            )
            .then(
                setNotificationData({message: 'remove', personName: person.name}),
                setTimeout(() => {
                    setNotificationData({message: '', personName: ''})
                }, 5000)
            )
            .catch(error => {
                setNotificationData({message: 'error', personName: person.name})
                setTimeout(() => {
                    setNotificationData({message: '', personName: ''})
                }, 5000)
                setPersons(persons.filter(n => n.id !== person.id))
            })
    }

    const handleNameChange = (event) => {setNewName(event.target.value)}
    const handleNumberChange = (event) => {setNewNumber(event.target.value)}
    const handleFiltering = (event) => {setKeyword(event.target.value)}

    const personList = keyword === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase()))

    return (
      <div>
        <h2>Phonebook</h2>
        <Notification
            data={notificationData}
        />
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
            handleRemovingPerson={handleRemovingPerson}
        />
      </div>
    )
  
  }
  
  export default App

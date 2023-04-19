import Person from './Person'

const Persons = ({ personList, handleRemovingPerson }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {personList.map(person => 
                <div key={person.id}>
                    <Person person={person.name} number={person.number} />
                    <button onClick={() => handleRemovingPerson(person)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Persons
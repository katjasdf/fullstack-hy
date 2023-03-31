const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}

const Header = ({name}) => {
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
}

const Content = ({parts}) => {
    const allParts = parts.map(part => <Part key={part.id} part={part}/>)

    return (
      <div>
        {allParts}
      </div>
    )
}

const Part = ({part}) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
      <div>
        <p style={{fontWeight: 'bold'}}>Total of {total} exercises</p>
      </div>
    )
}

export default Course
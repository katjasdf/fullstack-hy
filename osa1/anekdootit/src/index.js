import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const AnecdoteOfTheDay = ({anecdote, votes}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const MostVoted = ({anecdote, votes}) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [mostVotedValue, setMostVotedValue] = useState(0)
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // selected refers to anecdotes index in array, random is set as selected
  // random will be generated until it's different to current selected
  const handleNextAnecdote = () => {
    let random = selected
    while (random === selected) {
      random = Math.floor(Math.random() * (anecdotes.length))
    }
    setSelected(random)
  }

  // creating a copy of the current votes array, adding one point to current anecdote
  // and setting copy as the original "votes" -array
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    // if selected anecdote votes value is higher than mostVotedValue, it's set to mostVoted
    // mostVotedValue saves the vote amount and mostVotedAnecdote the index in array
    if (votes[selected] > mostVotedValue) {
      setMostVotedValue(votes[selected])
      setMostVotedAnecdote(selected)
    }
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={handleVote} text='vote'/>
      <Button handleClick={handleNextAnecdote} text='next anecdote'/>
      <MostVoted anecdote={anecdotes[mostVotedAnecdote]} votes={votes[mostVotedAnecdote]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render( <App anecdotes={anecdotes} />, document.getElementById('root'))

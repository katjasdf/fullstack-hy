import { useState } from 'react';

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = good / all * 100

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>

    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={all}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={positive}/>
        </tbody>
      </table>
    </div>
  )
    
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)

    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodFeedback} text='Good'/>
        <Button handleClick={handleNeutralFeedback} text='Neutral'/>
        <Button handleClick={handleBadFeedback} text='Bad'/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
}


export default App

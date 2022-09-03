import { useState } from 'react'

const Button = ({text, onClick}) => 
  <button onClick={onClick}>{text}</button>

const Stats = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Emotions = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const positive = good / sum * 100
  const average = (good - bad) / (good + bad + neutral)

  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <Stats text="good" value={good} />
          <Stats text="neutral" value={neutral} />
          <Stats text="bad" value={bad} />
          <Stats text="all" value={good+neutral+bad} />
          <Stats text="average" value={average} />
          <Stats text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button text="bad" onClick={() => setBad(bad+1)} />

      <Emotions good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
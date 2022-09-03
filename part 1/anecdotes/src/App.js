import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const msg = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]

  const [noor, setNoor] = useState(0)
  const [vote, setVotes] = useState(new Array(msg.length).fill(0))

  const handleVotesClick = () => {
    const count = [...vote]
    count[noor] += 1
    setVotes(count)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{msg[noor]}</p>
      <p>has {vote[noor]} vote</p>

      <Button handleClick={handleVotesClick} text="vote" />
      <Button
        handleClick={() => {
          setNoor(Math.floor(Math.random() * msg.length))
        }}
        text="next anecdote"
      />

      <h1>Anecdote with most Votes</h1>
      <div>
        <p>{msg[vote.indexOf(Math.max(...vote))]}</p>
        <p>has {vote[vote.indexOf(Math.max(...vote))]} vote</p>
      </div>
    </>
  )
}

export default App;
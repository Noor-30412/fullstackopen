const Top = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Division = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Body = (props) => {
  return (
    <div>
      {props.parts.map(part => <Division name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Calc = (props) => {
  const total = props.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const chap = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Top name={chap.name} />
      <Body parts={chap.parts}/>
      <Calc parts={chap.parts} />
    </div>
  )
}

export default App
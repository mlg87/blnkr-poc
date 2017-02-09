import React from 'react'

const App = (props) => {
  const { children } = props

  return (
    <div>
      <h1>this is the app</h1>
      { children }
    </div>
  )
}

export default App

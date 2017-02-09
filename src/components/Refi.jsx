import React from 'react'

const Refi = (props) => {
  const { customerName } = props.params

  return (
    <div>lets refi this bitch { customerName }</div>
  )
}

export default Refi

import React from 'react'

import comp from './Comp'

function Person1({money , handleincrease}) {
  return (
    <>
    <h1>Ayan is Offring : ${money}</h1>
    <button onClick={handleincrease}>Click here to increase</button>
    </>
  )
}

export default comp(Person1)
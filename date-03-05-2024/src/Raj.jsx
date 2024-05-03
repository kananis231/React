import React from 'react'

import Comp from './Comp'

function Person2({money , handleincrease}) {
  return (
    <>
    <h1>Raj is Offring : ${money}</h1>
    <button onClick={handleincrease}>Click here to increase</button>
    </>
  )
}

export default Comp(Person2)
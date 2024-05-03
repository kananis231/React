import React from 'react'
import { useState } from 'react'

function comp(Originalcomponent) {
    function Newcomponent(){
        const [money , setMoney] = useState(10)
        function handleincrease(){
         setMoney(money * 2)
        }
        return <Originalcomponent money={money} handleincrease={handleincrease}/>
    }
    
  return Newcomponent
}

export default comp
import React from 'react'
import { useState , useMemo } from 'react'
function Example() {
    const [ isDarkMode , setisDarkMode] = useState(false)

    const theme = useMemo(()=>{
        return {
            backgroundColor : isDarkMode ? "black" : "white",
            color : isDarkMode ?  "white" : "black" 
        }
    },[isDarkMode])

    document.body.style.backgroundColor = theme.backgroundColor
    document.body.style.color = theme.color
  return (
    <div>
        <button onClick={()=>setisDarkMode(!isDarkMode)}>Toggle Mode</button>
        <h1>Fetri</h1>
    </div>
  )
}

export default Example
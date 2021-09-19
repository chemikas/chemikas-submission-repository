
import React from 'react'

const Hello = (savybės) => {
    return (    
  <>      
    Hello world, your name is {savybės.name}, you have {savybės.age}
    <br />  
  </>  
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "George" age = {25+19}/>
      <Hello name ="Whoever" age = "none_of_it"/>
    </div>
  )
}

export default App;

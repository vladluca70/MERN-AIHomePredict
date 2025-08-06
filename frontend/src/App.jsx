import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername]=useState('')

  function handleUsername(name){
    setUsername(name)
  }

  if (username){
    return (
      <>
        <WelcomePage/>
      </>
    )
  }
  else{
    return (
      <>
        <AuthPage succesfulLoginOrRegister={handleUsername}/>
      </>
    )
  }

}

export default App

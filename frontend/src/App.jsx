import { useState } from 'react'
import './App.css'
import WelcomePage from './WelcomePage'
import AuthPage from './AuthPage'

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

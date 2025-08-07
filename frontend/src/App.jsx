import { useState } from 'react'
import './App.css'
import PredictPricePage from './PredictPricePage'
import AuthPage from './AuthPage'

function App() {
  const [username, setUsername]=useState('')

  function handleUsername(name){
    setUsername(name)
  }

  if (username){
    return (
      <>
        <PredictPricePage username={username}/>
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

import { useState } from "react"


function AuthPage()
{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    async function handleRegisterType() {
        await handleRequest('register')
    }

    async function handleRequest(requestType) {
        
    }

    return(
        <>
            <input onChange={(e)=>handleUsernameChange(e)}/>
            <input onChange={(e)=>handlePasswordChange(e)}/>
            <button onClick={handleRegisterType}>Register</button>
        </>
    )
}

export default AuthPage
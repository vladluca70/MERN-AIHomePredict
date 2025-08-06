import { useState } from "react"


function AuthPage()
{
    const [username, setUsername]=useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    async function handleRegisterType() {
        await handleRequest('register')
    }

    async function handleRequest(requestType) {
        
    }

    return(
        <>
            <input onChange={(e)=>handleUsernameChange(e)}/>
            <button onClick={handleRegisterType}>Register</button>
        </>
    )
}

export default AuthPage
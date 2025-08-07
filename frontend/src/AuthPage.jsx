import { useState } from "react"


function AuthPage({succesfulLoginOrRegister})
{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [errorMessage, setErrorMessage]=useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    async function handleRegisterType() {
        await handleRequest('signup')
    }

    async function handleLoginType() {
        await handleRequest('login')
    }

    async function handleRequest(requestType) {
        const url=`http://localhost:5002/${requestType}`

        try {
            const response = await fetch(url, {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({username:username, password:password})
        });

        const responseData=await response.json()
        if(response.ok){
            setErrorMessage('')
            succesfulLoginOrRegister(username)
        }
        else{
            setErrorMessage(responseData.message)
        }   

        } catch (error) {
           console.error("errors", error) 
        }
    }

    return(
        <>
            <input type="text" onChange={(e)=>handleUsernameChange(e)}/>
            <input type="password" onChange={(e)=>handlePasswordChange(e)}/>
            <button onClick={handleLoginType}>Log in</button>
            <button onClick={handleRegisterType}>Sign Up</button>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}

export default AuthPage
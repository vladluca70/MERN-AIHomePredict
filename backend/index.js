const express=require('express')
const cors=require('cors')
const port=5000

const server=express()

server.listen(
    port, ()=>{
        console.log(`it is working on port ${port}`)
    }
)
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const port=5000
const server=express()
const url='mongodb://localhost:27017/home-prediction';

server.use(express.json())
server.use(cors())

mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true}
});
const userModel=mongoose.model('User', userSchema)




server.listen(
    port, ()=>{
        console.log(`it is working on port ${port}`)
    }
)
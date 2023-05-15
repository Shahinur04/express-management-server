const express = require('express');
const cors =require('cors');
const app =express();
const port =process.env.Port || 5000;


// middleware
app.use(cors());
app.use(express.json());
const users =[
    {'id':1,'name':'john1','email':'john1@example.com'},
    {'id':2,'name':'john2','email':'john2@example.com'},
    {'id':3,'name':'john3','email':'john3@example.com'},
    {'id':4,'name':'john4','email':'john4@example.com'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('post api hitting ')
    console.log(req.body)
    const newUser=req.body;
    newUser.id =users.length+1;
    users.push(newUser);
    res.send(newUser)
})

app.get('/',(req,res) =>{
    res.send('user management system is running');
})

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
})
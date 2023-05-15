const express = require('express');
const app =express();
const port =process.env.Port || 5000;


const users =[
    {'id':1,'name':'john','email':'john@example.com'},
    {'id':1,'name':'john','email':'john@example.com'},
    {'id':1,'name':'john','email':'john@example.com'},
    {'id':1,'name':'john','email':'john@example.com'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/',(req,res) =>{
    res.send('user management system is running');
})

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
})
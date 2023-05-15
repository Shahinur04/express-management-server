const express = require('express');
const app =express();
const port =process.env.Port || 5000;


app.get('/',(req,res =>{
    res.send('user management system is running');
}))

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
})
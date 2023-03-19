import express from "express";
const app = express();
const PORT = process.env.PORT || 3300;


app.get('/', (req,res)=>{
    res.send(`<h1> Hi! </br> Welcome to nodejs/express & mysql demo</h1>`)
})



app.listen(PORT, ()=> console.log(`server is running ${PORT})`)
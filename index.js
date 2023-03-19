const express = require("express");
const app = express();
const PORT = process.env.PORT || 3300;
const pool =  require("./Queries/connectPool");


app.get('/', (req,res)=>{
    res.send(`<h1> Hi! </br> Welcome to nodejs/express & mysql demo</h1>`)
})

// getting all users
app.get("/users", async(req,res)=>{
    const con = await pool()
    console.log(con)
    res.send("users successfully retrieved")
})




app.listen(PORT, ()=> console.log(`server is running ${PORT}`))
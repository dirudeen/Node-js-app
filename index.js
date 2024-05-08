const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("Welcome to a simple node application")
})
app.get("/hello", (req, res)=>{
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log("Server running at port "+ port)
})
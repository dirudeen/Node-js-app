const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("Welcome to a simple node application")
})

app.listen(port, ()=>{
    console.log("Server running at port "+ port)
})
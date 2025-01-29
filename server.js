require("dotenv").config()

const express = require("express")
const cors = require("cors")
const todos  = require("./TODOS")
const app = express()
const PORT = process.env.PORT

app.use(cors())

app.get("/", (req, res)=> {
    res.json(todos)
})

app.get("/todo/", (req, res) => {
    const todo = todos.find(todo => todo.id === Number(req.query.id))
    res.json(todo)
})



app.listen(PORT)

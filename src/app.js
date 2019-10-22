const express = require("express")
const app = express()

//rotas
const tarefasRoute = require("./routes/index")


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept")
    next()
    
})


app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app

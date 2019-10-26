const app = require('./src/app')

const port = 5000

app.listen(port, function(){
    console.log(`{msg do server} rodando na porta ${port}`)
})
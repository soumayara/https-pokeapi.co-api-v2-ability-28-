const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  if (id > 4 || id <= 0) {
    res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
  }
  res.status(200).send(tarefas.find(prof => prof.id == id))
}

exports.getConcluido = (req, res) =>{
  const concluidos = (tarefas.filter(item => item.concluido == "true"))
  res.send(concluidos)
}



exports.getNome = (req, res) => {
  const nome = req.params.nome
  const nomeBusca = tarefas.filter(item => item.nome == nome)

  if(!nomeBusca){
    res.redirect(301, "https://www.google.com")
  }
  
  res.send(200).send(nomeBusca)
}

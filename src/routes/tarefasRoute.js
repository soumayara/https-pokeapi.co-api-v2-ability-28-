const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/concluido", controller.getConcluido)
router.get("/:id", controller.getById )
router.get("/busca/:nome", controller.getNome)


//router.get("")

module.exports = router
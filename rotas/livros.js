const { Router } = require("express")
const { getLivros, getLivro} = require("../Controller/livro")

const router = Router()

router.get("/", getLivros)
router.get("/:id", getLivro)

router.post("/", getLivros )

router.patch("/", (req,res) => {
    res.send("VocÊ fez uma requisição do tipo patch")
})

router.delete("/", (req,res) => {
    res.send("VocÊ fez uma requisição do tipo delete")
})

module.exports = router
const { Router } = require("express")
const {  getFavoritos, deletaFavoritoPeloId, postFavorito} = require("../Controller/favorito")

const router = Router()

router.get("/", getFavoritos)

router.post("/:id", postFavorito )

router.delete("/:id", deletaFavoritoPeloId)

module.exports = router
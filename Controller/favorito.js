const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito } = require("../Services/favoritos")

function getFavoritos(req, res) {
    try {
        const livrosFavoritos = getTodosFavoritos()
        res.send(livrosFavoritos)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaFavoritoPeloId(req, res) {
    try {
        const id = req.params.id
        if(!id || !Number(id)) {
            res.status(422)
            res.send("ID digitado inválido")
        }

        deletaFavoritoPorId(id)
        res.status(201)
        res.send("Livro Favorito excluído")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Livro favorito inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    deletaFavoritoPeloId,
    postFavorito
}
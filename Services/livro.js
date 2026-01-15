const fs = require("fs")

function getTodosLivros() {

    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltradoPorId = livros.filter( livro => livro.id === id ) [0]
    return livroFiltradoPorId
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novoListaDeLivro = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novoListaDeLivro))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)

    const novaListaDeLivro = {...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = novaListaDeLivro


    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivroPorId(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltradoPorId = livrosAtuais.filter( livro => livro.id != id )

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltradoPorId))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deleteLivroPorId
}
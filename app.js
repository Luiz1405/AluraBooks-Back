const express = require("express")
const rotaLivro = require("./rotas/livros")
const cors = require("cors")

const app = express()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PATCH,DELETE',
}
app.use(cors(corsOptions))

app.use('/livros', rotaLivro)


const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
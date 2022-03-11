import "reflect-metadata" //importando metadata do reflect-metadata
import express from "express" //importando express
import "./database" //importando o arquivo database para subir banco de dados

const app = express()//Instanciando o express

//Definindo uma rota qualquer
app.get('/', (req, res) => {
    res.send('funcionou')
})

//Rodando o servidor
app.listen(8080, () => {
    console.log("Server started on port 8080")
})
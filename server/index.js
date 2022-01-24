const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "simulado_bruno_souza",
});

app.post('/api/login', (req, res) => {
    const { username, password, perfil } = req.body;

    sqlSelect = "SELECT * FROM usuario WHERE login = ? AND senha = ? AND perfil = ?";

    db.query(sqlSelect, [username, password, perfil], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send({
                    logged: true,
                    perfil: perfil,
                })
            } else {
                res.send({ msg: "User not Found" })
            };
        };
    });
})

app.get('/alunoconsultaemp', (req, res) => {
    sqlSelect = "SELECT * FROM emprestimo LEFT JOIN livro ON emprestimo.codLivro = livro.codLivro";

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

             res.send(result)
           
        };
    });
})

app.get('/alunoconsultaemp/:titulo', (req, res) => {
    const { titulo } = req.params;
    console.log(titulo);
    sqlSelect = "SELECT * FROM emprestimo LEFT JOIN livro ON emprestimo.codLivro = livro.codLivro WHERE livro.titulo LIKE '%" + titulo + "%' ";

    db.query(sqlSelect,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            
             res.send(result)
           
        };
    });
})

app.listen(3001, () => {
    console.log('Running on port: 3001')
});

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configurações de middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // seu usuário do MySQL
    password: 'sua_senha', // sua senha do MySQL
    database: 'formulario_db' // nome do banco de dados
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para salvar o nome no banco de dados
app.post('/salvar-nome', (req, res) => {
    const nome = req.body.nome;

    if (!nome) {
        return res.status(400).json({ error: 'O nome é obrigatório.' });
    }

    const query = 'INSERT INTO usuarios (nome) VALUES (?)';
    db.query(query, [nome], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao salvar o nome no banco de dados.' });
        }
        res.status(200).json({ message: 'Nome salvo com sucesso!' });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




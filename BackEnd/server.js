// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulando dados de temperatura e umidade
let sensorData = {
    temperatura: 25,
    umidade: 60
};

// Rota para obter dados do sensor
app.get('/api/dados', (req, res) => {
    res.json(sensorData);
});

// Rota para atualização de dados (aqui você pode integrar com ESP32)
app.post('/api/dados', (req, res) => {
    sensorData = req.body;
    res.json(sensorData);
});

// Iniciando servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

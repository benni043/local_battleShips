// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // damit JSON gelesen werden kann

// Beispiel-Route für POST
app.post('/daten', (req, res) => {
    console.log("Empfangene Daten:", req.body);

    let x = req.body.grid

    x.forEach(row => {
        console.log(row);
    })

    res.send({message: "Daten erhalten", empfangen: req.body});
});

// Test-Route für GET
app.get('/', (req, res) => {
    res.send("Server läuft!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});

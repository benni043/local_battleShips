const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/daten', (req, res) => {
    let x = req.body.grid

    console.log("------------------------------------------")
    x.forEach(row => {
        console.log(row);
    })
    console.log("------------------------------------------")

    res.send({message: "Daten erhalten", empfangen: req.body});
});

app.get('/', (req, res) => {
    res.send("Server läuft!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});

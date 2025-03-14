// Backend calculator server
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { expression } = req.body;
    try {
        const result = eval(expression); // Be careful using eval in production!
        res.json({ result });
    } catch (error) {
        res.json({ error: 'Invalid Expression' });
    }
});

app.listen(port, () => {
    console.log(`Calculator backend running at http://localhost:${port}`);
});

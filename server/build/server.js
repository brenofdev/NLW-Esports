import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, nome: 'Ad 1' },
        { id: 2, nome: 'Ad 2' },
        { id: 3, nome: 'Ad 3' },
    ]);
});
app.listen(3333);

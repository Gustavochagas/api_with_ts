import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listg');

    response.json({
        name: 'Gustavo'
    });
});

app.listen(3333);
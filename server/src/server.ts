import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Gustavo',
        'Patrocínio',
        'Silva',
        'O Brabo' 
    ]);
});

app.listen(3333);
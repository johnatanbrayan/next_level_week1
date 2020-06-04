import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        'message' : 'Está funcionando!!'
    });
});

export default routes ;

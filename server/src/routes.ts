import express from 'express';
import PointsController from './controllers/pointsController';
import ItensController from './controllers/itensController';

const pointsController = new PointsController();
const itensController = new ItensController();
const routes = express.Router();

// Test endpoit global
routes.get('/', async (req, res) => {
    res.json({
        'message' : 'Está funcionando!!'
    });
});

// Lists todos os itens
routes.get('/itens', itensController.index);

// Cria e Populariza os points
routes.post('/points', pointsController.create);

/* ------Anotacao(Vale lembrar):
    Boas praticas de nomeacao dos metodos no padrao api restfull
    index(lista), show(mostra um obj), create(cria), update(atualiza), delete(deleta) 
*/

export default routes ;
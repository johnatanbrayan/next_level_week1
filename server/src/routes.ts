import express from 'express';
import knex from './database/connection'

const routes = express.Router();

// Test endpoit global
routes.get('/', async (req, res) => {
    res.json({
        'message' : 'Está funcionando!!'
    });
});

// Lists todos os itens
routes.get('/itens', async (req, res) => {
    const itens = await knex('itens').select('*');

    const serializableItens = itens.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });
    res.json(serializableItens);
});

routes.post('/points', async (req,res) => {
    const {   
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        itens
    } = req.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake', 
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id= insertedIds[0];

    const point_itens = itens.map((item_id: number) => {
        return {
            item_id,
            point_id
        };
    });

    await trx('point_itens').insert(point_itens); 

    return res.json({success: true});
});

export default routes ;
import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    
    async show(req: Request, res: Response) {
        const { id } = req.params;
        const point = await knex('points').where('id', id).first();
    
        if(!point) {
            res.status(400).json({'message': 'Point não encontrado!'});
        }
        
        const itens = await knex('itens')
            .join('point_itens', 'itens.id', '=', 'point_itens.item_id').where('point_itens.point_id', id);

        res.json({point, itens});
    };

    async index(req: Request, res: Response) {
        const points = await knex('points').select('*');

        res.json(points);
    }

    async create(req: Request, res: Response) {
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
    }
}

export default PointsController;
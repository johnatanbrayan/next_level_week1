import knex from '../database/connection';
import { Request, Response } from 'express';

class ItensController {
    async index(req: Request, res: Response) {
        const itens = await knex('itens').select('*');
    
        const serializableItens = itens.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
        res.json(serializableItens);
    }
}

export default ItensController;
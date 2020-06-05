import Knex  from 'knex';

export async function seed(knex: Knex) {
    await knex('itens').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'lampadas.svg' },
        { title: 'Lâmpadas', image: 'lampdas.svg' },
        { title: 'Lâmpadas', image: 'lampadas.svg' },
    ]);
}
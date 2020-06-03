import Express, { response } from 'express' 

const app = Express();

app.use(Express.json());

const users = [
    'John',
    'Matheus',
    'Joe',  
    'Let'
    ]

app.get('/users', (req, res) => {
    console.log('Listagem de Usuários');
    const search = String(req.query.search).toUpperCase();

    const filteredUsers = users.filter(user => user.toUpperCase().includes(search));

    res.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users[id];
    
    res.json(user);
});

app.post('/users', (req, res) => {
    const data = req.body

    const user = {
        name: data.name,
        age: data.age,
        email: data.email
    }

    res.json(user);
});

app.listen(3333);
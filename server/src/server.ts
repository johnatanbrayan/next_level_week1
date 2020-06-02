import Express, { response } from 'express' 

const app = Express();

app.get('/users', (request, response) => {
    console.log('Hello Word!!');
    
    response.json(
        [
            'John',
            'Matheus',
            'Joe',
            'Let'
        ]);

});
app.listen(3333);
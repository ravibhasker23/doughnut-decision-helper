const jsonServer = require('json-server');
const middleware = jsonServer.defaults();

const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const questionnaire = require('../server/data/questionnaire');

server.get('/api/questionnaire', (req, res, next) => {
    res.status(200).send(questionnaire.fetchQuestionnaire);
})

server.listen(3000, () => {
    console.log('server listening on port 3000');
})
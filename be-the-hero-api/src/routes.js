const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/ongs', OngController.insert);
routes.get('/ongs', OngController.findAll);

routes.post('/incidents', IncidentController.insert);
routes.get('/incidents', IncidentController.findAll);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.findIncidentsOng);
routes.post('/sessions', SessionController.create)

module.exports = routes;
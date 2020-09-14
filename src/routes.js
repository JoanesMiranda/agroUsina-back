const express = require('express');
const MillsControllers = require('./controllers/MillsControllers');
const HarvestsControllers = require('./controllers/HarvestsController');
const FarmsControllers = require('./controllers/FarmsController');
const FieldsControllers = require('./controllers/FieldsController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send({mensagem: "hello world"});
});
routes.get('/mills', MillsControllers.index);
routes.get('/mills/page/:num',MillsControllers.paginate);
routes.post('/mills', MillsControllers.store);
routes.delete('/mills/:id', MillsControllers.delete);

routes.get('/mills/:mill_id/harvests', HarvestsControllers.index);
routes.post('/mills/:mill_id/harvests', HarvestsControllers.store);
routes.post('/mills/:mill_id/harvests', HarvestsControllers.delete);

routes.get('/harvests/:harvest_id/farms', FarmsControllers.index);
routes.post('/harvests/:harvest_id/farms', FarmsControllers.store);
routes.delete('/harvests/:harvest_id/farms/:id', FarmsControllers.delete);

routes.get('/farms/:farm_id/fields', FieldsControllers.index);
routes.post('/farms/:farm_id/fields', FieldsControllers.store);
routes.delete('/farms/:farm_id/fields', FieldsControllers.delete);


module.exports = routes;
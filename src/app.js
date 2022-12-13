import express from 'express';
import database from './config/database.js';
import routes from './routes/index.js';

database.on('error', console.log.bind(console, 'Erro de conexão'));
database.once('open', () => console.log('The database connection is successfully!'));

const app = express();

routes(app);

export default app;

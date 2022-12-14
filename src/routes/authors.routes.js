import express from 'express';
import authorsController from '../controllers/authors.controller.js';

const router = express.Router();

router
    .get('/authors', authorsController.index)
    .get('/authors/:id', authorsController.find)
    .post('/authors', authorsController.store)
    .put('/authors/:id', authorsController.update)
    .delete('/authors/:id', authorsController.destroy);

export default router;

import express from 'express';
import booksController from '../controllers/books.controller.js';

const router = express.Router();

router
    .get('/books', booksController.index)
    .get('/books/:id', booksController.find)
    .post('/books', booksController.store)
    .put('/books/:id', booksController.update)
    .delete('/books/:id', booksController.destroy);

export default router;

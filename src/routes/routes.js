import express from "express";
import booksRouter from "./books.routes.js";
import authorsRouter from "./authors.routes.js";

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Curso de Node!'));
    app.use(express.json(),
        booksRouter,
        authorsRouter
    )
}

export default routes;

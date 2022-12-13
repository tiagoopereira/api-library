import books from "../models/Book.js";

export default class booksController {
    static index = (req, res) => {
        books.find((err, books) => {
            if (err) {
                console.log(err);
                return;
            }
    
            return res.status(200).json(books);
        });
    }

    static find = (req, res) => {
        const id = req.params.id;

        books.findById(id, (err, books) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(200).json(books);
        });
    }

    static store = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(201).json(book.toJSON());
        })
    }

    static update = (req, res) => {
        const id = req.params.id;
        const data = req.body;

        books.findByIdAndUpdate(id, { $set: data }, (err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(204).json();
        });
    }

    static destroy = (req, res) => {
        const id = req.params.id;
        
        books.findByIdAndDelete(id, (err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }

            return res.status(204).json();
        })
    }
}

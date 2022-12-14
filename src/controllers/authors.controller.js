import authors from "../models/Author.js";

export default class authorsController {
    static index = (req, res) => {
        authors.find((err, authors) => {
            if (err) {
                console.log(err);
                return;
            }
    
            return res.status(200).json(authors);
        });
    }

    static find = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(200).json(authors);
        });
    }

    static store = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(201).json(author.toJSON());
        })
    }

    static update = (req, res) => {
        const id = req.params.id;
        const data = req.body;

        authors.findByIdAndUpdate(id, { $set: data }, (err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }
    
            return res.status(204).json();
        });
    }

    static destroy = (req, res) => {
        const id = req.params.id;
        
        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                console.log(err);

                return res.status(500).json({ message: 'An internal error occurred during processing.' });
            }

            return res.status(204).json();
        })
    }
}

const { json } = require('express');
const fs = require('fs');
let path = require('path');

//make get routes for index and notes pages

module.exports = (app) => {

    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);

                res.status(500).send();
            } else {
                let notes = JSON.parse(data);

                notes.forEach((note, index) => {
                    note.id = index;

                });
                res.json(notes)
            }
        })
    });

    app.post('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);

                res.status(500).send();
            } else {
                let notes = JSON.parse(data);
                notes.push(req.body);
                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(notes),
                    (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send();
                        } else {
                            res.send();
                        };
                    }
                );
            }
        });
    });

    app.delete('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);

                res.status(500).send();
            } else {
                let notes = JSON.parse(data);

                notes.forEach((note, index) => {
                    note.id = index;

                });
                res.json(notes)
            }
        })
    });


};


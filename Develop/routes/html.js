let path = require('path');

//make get routes for index and notes pages

module.exports = (app) => {


    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

};


const express = require('express');
const fs = require('fs');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/assets', express.static('./assets'));

require('./routes/html')(app);
require('./routes/api')(app);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
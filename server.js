const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');

const app = express();

// Body Parser MiddleWare
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => {console.log('DataBase Connected')})
    .catch(err => console.log(err));

// --------Use-Routes----------
app.use('/api/items', items);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('cilent/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
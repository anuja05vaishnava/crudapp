const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/app.routes');

const app = express();

const Devdburl =
  'mongodb+srv://aspire_training:vlZ7C48dk9Q0aPQa@cluster0.d969r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || Devdburl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

const port = 1234;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});

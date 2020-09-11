const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const taskRoutes = require('./routes/app');

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(taskRoutes);

mongoose.connect(
  'mongodb+srv://devuser:abcd1234@cluster0-5b1ty.mongodb.net/todotasks?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('DB Connected!')
)

app.listen(8080, function() {
  console.log("Server started on port 8080");
});


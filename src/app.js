'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD

// Esoteric Resources
const oauth = require('./github.js');
=======
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');
const authRouter = require('./auth/router.js');
>>>>>>> 0690d73dbfad0095dd606fb24a11acc33a2f81d4

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
<<<<<<< HEAD

// Website Files
app.use(express.static('./public'));

// Routes
app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});
=======
app.use(morgan('dev'));

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);
>>>>>>> 0690d73dbfad0095dd606fb24a11acc33a2f81d4

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};

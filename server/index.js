const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const db = require('./db/index');
/* Middleware */
// Morgan logging middleware
app.use(morgan('dev'));

// Static middleware
app.use(express.static(path.join(__dirname, '../public/')));

// Other middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API route
app.use('/api', require('./api'));

/* Index HTML provider */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* Server */
try {
  db.sync();
  console.log('Database synced...');
  app.listen(port, () => {
    console.log('Started Server...');
    console.log('...');
    console.log(`Server listening on port: ${port}`);
  });
} catch (error) {
  console.error(error);
}

/* Server internal Error Handler */
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

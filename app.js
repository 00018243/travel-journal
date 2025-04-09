const express = require('express');
const app = express();
const path = require('path');

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const tripsRouter = require('./routes/trips/index');
app.use('/', indexRouter);
app.use('/trips', tripsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
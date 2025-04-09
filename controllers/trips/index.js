const tripService = require('../../services/trips');

// Show all trips
exports.getTrips = (req, res) => {
  const trips = tripService.getAllTrips();
  res.render('trips/index', { title: 'Trips', trips });
};

// Show form to create a new trip
exports.getCreateTrip = (req, res) => {
  res.render('trips/create', { title: 'Add a Trip' });
};

// Handle creating a new trip
exports.postTrip = (req, res) => {
  const { title, location, date, experiences } = req.body;
  // Basic validation
  if (!title || !location || !date) {
    return res.render('trips/create', { title: 'Add a Trip', error: 'Title, location, and date are required' });
  }
  const newTrip = tripService.createTrip({ title, location, date, experiences });
  res.redirect('/trips');
};

// Show form to edit a trip
exports.getEditTrip = (req, res) => {
  const trip = tripService.getTripById(parseInt(req.params.id));
  if (!trip) {
    return res.status(404).send('Trip not found');
  }
  res.render('trips/edit', { title: 'Edit Trip', trip });
};

// Handle updating a trip
exports.updateTrip = (req, res) => {
  const { title, location, date, experiences } = req.body;
  if (!title || !location || !date) {
    return res.render('trips/edit', { title: 'Edit Trip', trip: { id: req.params.id }, error: 'Title, location, and date are required' });
  }
  const updatedTrip = tripService.updateTrip(parseInt(req.params.id), { title, location, date, experiences });
  if (!updatedTrip) {
    return res.status(404).send('Trip not found');
  }
  res.redirect('/trips');
};

// Handle deleting a trip
exports.deleteTrip = (req, res) => {
  const success = tripService.deleteTrip(parseInt(req.params.id));
  if (!success) {
    return res.status(404).send('Trip not found');
  }
  res.redirect('/trips');
};
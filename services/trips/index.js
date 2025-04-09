let trips = []; // In-memory array to store trips

// Get all trips
exports.getAllTrips = () => {
  return trips;
};

// Get a single trip by ID
exports.getTripById = (id) => {
  return trips.find(trip => trip.id === id);
};

// Create a new trip
exports.createTrip = (trip) => {
  const newTrip = {
    id: trips.length + 1, // Simple ID based on array length
    title: trip.title,
    location: trip.location,
    date: trip.date,
    experiences: trip.experiences
  };
  trips.push(newTrip);
  return newTrip;
};

// Update a trip
exports.updateTrip = (id, updatedTrip) => {
  const tripIndex = trips.findIndex(trip => trip.id === id);
  if (tripIndex === -1) return null;
  trips[tripIndex] = { ...trips[tripIndex], ...updatedTrip, id };
  return trips[tripIndex];
};

// Delete a trip
exports.deleteTrip = (id) => {
  const tripIndex = trips.findIndex(trip => trip.id === id);
  if (tripIndex === -1) return false;
  trips.splice(tripIndex, 1);
  return true;
};
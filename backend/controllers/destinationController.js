exports.getAllDestinations = (req, res) => {
    const destinations = [
      { id: 1, name: 'Paris', description: 'City of Light' },
      { id: 2, name: 'Maldives', description: 'Tropical Paradise' },
    ];
    res.json(destinations);
  };
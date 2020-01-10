const INITIAL_STATE = {
  selectedLocation: {
    id: 0,
    name: "Select Location",
    longitude: 0,
    latitude: 0
  },
  locations: [
    { id: 1, name: "Newcastle", longitude: 53.5, latitude: 1.6 },
    { id: 2, name: "Edinburgh", longitude: 52.23, latitude: 1.58 }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

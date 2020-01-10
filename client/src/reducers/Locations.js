const INITIAL_STATE = {
  selectedLocation: {
    id: 0,
    name: "Select Location",
    longitude: 0,
    latitude: 0
  },
  locations: [
    { id: 1, name: "Newcastle", longitude: -1.62, latitude: 54.98 },
    { id: 2, name: "Edinburgh", longitude: -3.19, latitude: 55.95 }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const Positions = [
  {
    coords: {
      lat: 51.40996,
      lng: 35.75754,
    },
    coords: {
      lat: 53.40996,
      lng: 31.75754,
    },
    coords: {
      lat: 48.40996,
      lng: 29.75754,
    },
    coords: {
      lat: 48.40996,
      lng: 29.75754,
    },
  },
];

export const getRandomPosition = () => {
  return Positions[Math.floor(Math.random() * Positions.length)];
};

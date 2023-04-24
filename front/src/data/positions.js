const Positions = [
  {
    lat: 51.8011,
    lng: 31.6511,
  },
  {
    lat: 51.70996,
    lng: 31.75754,
  },
  {
    lat: 51.40996,
    lng: 30.9144,
  },
  {
    lat: 50.9412,
    lng: 31.21,
  },
  {
    lat: 50.80996,
    lng: 31.75754,
  },
];

export const getRandomPosition = () => {
  return Positions[Math.floor(Math.random() * Positions.length)];
};

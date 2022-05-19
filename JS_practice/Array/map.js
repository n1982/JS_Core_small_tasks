const numbers = [1, 2, 3, 4];
const numbersPlusOne = numbers.map(n => n + 1);
console.log(numbersPlusOne); // [2, 3, 4, 5]

//Подобным образом можно получить массив, содержащий в себе только одно свойство объекта:
const allActivities = [
  { title: 'My activity', coordinates: [50.123, 3.291] },
  { title: 'Another activity', coordinates: [1.238, 4.292] },
];

const allCoordinates = allActivities.map(activity => activity.coordinates);
console.log(allCoordinates); // [[ 50.123, 3.291], [ 1.238, 4.292]]

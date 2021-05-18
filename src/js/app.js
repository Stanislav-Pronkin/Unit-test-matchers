// TODO: write your code here
import sum from './basic';
import { sort } from './user';

console.log('worked');

console.log(sum([1, 2]));

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
console.log(sort(heroes));


// Import everything exported from people.ts into an object called 'people'
import * as people from './models/people';

let customer = new people.Customer('Bob', 34);
let employee = new people.Employee('Jane', 25);

console.log(people.MAXIMUM_PEOPLE);
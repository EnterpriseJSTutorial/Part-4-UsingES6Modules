
class Person {

    constructor(
        public name: string,
        public age: number) {
    }

    greet() {
        console.log('Hi ' + this.name);
    }

}

export class Customer extends Person {
    public favouriteColour: string;
}

export class Employee extends Person {
    public hoursPerWeek: number;
}

export const MAXIMUM_PEOPLE = 200;

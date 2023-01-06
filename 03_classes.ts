class Person {
	constructor(public name: string, public readonly age: number) {}
	greetings() {
		return `Hello, my name is ${this.name}`;
	}
}

class Employee extends Person {
      constructor(name: string, age: number, public salary: number) {
            super(name, age);
      }
}

let user = new Person('John', 30);
console.log(user.greetings());
let employee = new Employee('John', 30, 1000);
console.log(employee.greetings());
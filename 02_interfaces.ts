interface Person {
	name: string;
	readonly age: number;
	[key: string]: any;
	greetings(): string;
}

let _user: Person = {
	name: 'John',
	age: 30,
	surname: 'Doe',
	greetings() {
		return `Hello, my name is ${this.name} ${this.surname}`;
	},
};

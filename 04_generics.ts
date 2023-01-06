const map = new Map<number, string>();
map.set(1, 'Hello');

class myMap extends Map<number, string> {}
class User {}

class Lecturer extends User {}

function getPromise<T extends User>(value: T): Promise<T> {
	return new Promise((res, rej) => setTimeout(() => res(value), 1000));
}

const value = await getPromise(new Lecturer());
console.log(value);
export {};

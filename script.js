//complete this code
class Animal {
	private _species: string;
	constructor(species: string) {
		this._species = species;
	}

	get species(): string {
		return this._species;
	}

	makeSound(): void {
		console.log(`The ${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species: string) {
		super(species);
	}
	makeSound(){
		 super.makeSound();
	}

	purr(): void {
		console.log("purr");
	}
}

class Dog extends Animal {
	constructor(species: string) {
		super(species);
	}
	makeSound(){
		 super.makeSound();
	}
	bark(): void {
		console.log("woof");
	}
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

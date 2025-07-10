//complete this code
class Animal {
	constructor(species: string){
		this.species = species;
	}

	get SpeciesOfAnimal(){
		return this.species;
	}

	makeSound(){
		return 'The + `${this.species}` + makes a sound';
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}

	purr(){
		rerurn ("purr");
	}

}

class Cat extends Animal {
	constructor(species){
		super(species);
	}

	bark(){
		return ("woof");
	}

}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

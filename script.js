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

	makeSoundToAnimal(){
		return super.makeSound;
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}

	bark(){
		return ("woof");
	}

	makeSoundToAnimal2(){
		return super.makeSound;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

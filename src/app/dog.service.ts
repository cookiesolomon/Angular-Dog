import { Injectable } from '@angular/core';
import { Dog } from './dogs/dog';

const DOGS: Dog[] = [
  {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), dateType: 'fullDate', wasEdited: false },
  {id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), dateType: 'fullDate', wasEdited: false },
  {id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), dateType: 'fullDate', wasEdited: false },
  {id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), dateType: 'fullDate', wasEdited: false },
  {id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), dateType: 'fullDate', wasEdited: false }
];



@Injectable()
export class DogService {
dogs: Array<Dog> = DOGS;

  constructor() { }

  getDogs(): Array<Dog> {
    return this.dogs;
  }

  addDog(newDog: Dog) {
    newDog.id = this.generateId();
    this.dogs.push(newDog);
    console.log(newDog);
}
editDog(id: Number, dog: Dog) {
  let updateDogIndex = this.dogs.findIndex((dog) => dog.id === id);
  this.dogs[updateDogIndex] = dog;
}

generateId (): number {
  return this.dogs[this.dogs.length - 1].id + 1;
}

}

import { Component, OnInit } from "@angular/core";
import { DogService } from "../dog.service";
import { Dog } from "./dog";

@Component({
  selector: "app-dogs",
  templateUrl: "./dogs.component.html",
  styleUrls: ["./dogs.component.css"]
})
export class DogsComponent implements OnInit {
  dogs: any[];
  title: string;
  selectedDog: Dog = new Dog();
  toggle = true;
  wasEdited: boolean;
  lastUpdated: string = "";
  updateIt: string = "";
  // deleteDog = this.dogService.deleteDog;
  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.title = "Add a New Dog";
    this.dogs = this.dogService.getDogs();
  }

  get format() {
    return this.toggle ? "fullDate" : "shortDate";
  }

  toggleDate(dog) {
    if (dog.dateType === "shortDate") {
      dog.dateType = "fullDate";
    } else {
      dog.dateType = "shortDate";
    }
  }
  deleteDog(dog) {
    this.dogs.splice(dog, 1);
    console.log(this.dogs);
  }

  editDog(dog: Dog) {
    this.selectedDog = Object.assign({}, dog);
  }
  addLastUpdated(dog) {
    this.lastUpdated =
      "last dog added: " + new Date().toString() + ", name: " + dog.name;
  }
  // addEditedDogs(dog) {
  //   if (dog.wasEdited) {
  //     this.updateIt = "recently updated";
  //   }
  // }
}

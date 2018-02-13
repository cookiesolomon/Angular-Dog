import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  dogName: string;
  dogWeight: number;
  dateType: string;
  birthDate: Date;
  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  addDog() {
  let newDog = new Dog();
  newDog.name = this.dogName;
  newDog.weight = this.dogWeight;
  newDog.birthDate = this.birthDate;
  this.dogService.addDog(newDog);
  }


}

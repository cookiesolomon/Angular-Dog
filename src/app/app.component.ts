import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'selenium-webdriver';
import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  catName: string;
  catWeight: number;
  dateType: string;
  birthDate: Date;
  sayHello: any;
  title = 'Dapper Doggies';
  cats = this.catService.getCats();
  toggle = true;

  constructor(
     private catService: CatService) {}



    // ngOnChanges(changes: SimpleChanges) {
    //   console.log(`ngOnChanges - data is ${this.dogName}`);
    //    // tslint:disable-next-line:forin
    //   // for (let propName in changes) {
    //   //   let chng = changes[propName];
    //   //   let cur  = JSON.stringify(chng.currentValue);
    //   //   let prev = JSON.stringify(chng.previousValue);
    //   //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //   }
    // }

    ngOnInit() {
      this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
    }

    ngOnDestroy() {
      window.clearInterval(this.sayHello);
    }


  get format() {return this.toggle ?  'fullDate' : 'shortDate'; }
  toggleCat(cat) {
    if (cat.dateType === 'shortDate') {
      cat.dateType = 'fullDate';
   } else {
    cat.dateType = 'shortDate';
  }
  }
}

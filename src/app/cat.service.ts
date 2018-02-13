import { Injectable } from '@angular/core';

const CATS = [
  {name: 'Whiskers', weight: 23, birthDate: new Date(2006, 2, 21), dateType: 'fullDate'},
  {name: 'Silky', weight: 18, birthDate: new Date(2011, 8, 12), dateType: 'fullDate'},
  {name: 'Felix', weight: 8, birthDate: new Date(2015, 5, 6), dateType: 'fullDate'},
  {name: 'Buttons', weight: 4, birthDate: new Date(2012, 3, 15), dateType: 'fullDate'},
  {name: 'Oreo', weight: 6, birthDate: new Date(2017, 5, 4), dateType: 'fullDate'}
];

@Injectable()
export class CatService {

  constructor() { }
  getCats() {
    return CATS;
  }

}





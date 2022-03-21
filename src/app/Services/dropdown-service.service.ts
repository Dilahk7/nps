import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownServiceService {
  singleoption: string = '';
  Multioption: string = '';

  setSingleSelect(val: string) {
    this.singleoption = val;
  }

  getSingleSelect() {
    return this.singleoption;
  }

  setMultiSelect(val: string) {
    this.Multioption = val;
  }

  constructor() {}
}

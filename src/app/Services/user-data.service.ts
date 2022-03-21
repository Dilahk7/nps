import { Injectable } from '@angular/core';
import { userModel } from '../form-array/userdata-helper';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  userdata: userModel[] = [
    new userModel('qwe', 0, 0, 'okay', new Date('12/01/2021')),
    new userModel('asd', 0, 0, 'bad', new Date('3/03/2021')),
    new userModel('bnm', 0, 0, 'good', new Date('9/05/2021')),
    new userModel('fff', 0, 0, 'good', new Date('11/02/2021')),
    new userModel('oip', 0, 0, 'bad', new Date('8/03/2021')),
    new userModel('zcv', 0, 0, 'okay', new Date('2/03/2021')),
    new userModel('hjk', 0, 0, 'okay', new Date('11/05/2021')),
  ];
}

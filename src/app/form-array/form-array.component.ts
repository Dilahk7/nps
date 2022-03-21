import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../Services/user-data.service';
import { userModel } from './userdata-helper';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  usermodel: userModel[] = [];
  userfg: FormGroup;

  Status: string[] = ['select', 'good', 'okay', 'bad'];

  constructor(
    private fb: FormBuilder,
    private userdataservice: UserDataService
  ) {
    this.userfg = this.fb.group({
      form: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.usermodel = this.userdataservice.userdata;

    this.usermodel.forEach((user) => {
      let fg: FormGroup = this.fb.group({
        employecode: [user.employecode, Validators.required],
        amount: [
          user.amount,
          [
            Validators.required,

            Validators.pattern('^[0-9]*$'),

            Validators.min(100),
          ],
        ],
        calculatedAmount: [{ value: user.calculatedAmount, disabled: true }],
        status: [user.status],
        date: [user.date.toISOString().substring(0, 10)],
      });
      this.form.push(fg);
    });
  }

  calamount(i: number) {
    let amt = 0;
    amt = this.form.controls[i].get('amount')?.value;
    let result;
    result = amt / 12;
    this.form.controls[i].patchValue({ calculatedAmount: result });
  }

  onsumbmitevent() {
    console.log(this.userfg.value);
  }
  isinvalidbtn() {
    return (
      this.userfg.get('amount')?.invalid && this.userfg.get('amount')?.touched
    );
  }

  get form(): FormArray {
    return this.userfg.get('form') as FormArray;
  }
}
//    usermodel: userModel[] = [];
//     userfg:FormGroup;

//   Status:string[]=["select","good","okay","bad"];

//   constructor(private fb: FormBuilder, private userdataservice:UserDataService) {{
//     this.userfg=this.fb.group({
//       forms:this.fb.array([]),
//   })

// }

//   ngOnInit() {

//     //taking in all the values from the userdata object
//     this.usermodel = this.userdataservice.userdata;

//     //mapping the values to form control
//     this.usermodel.forEach(user =>{
//       let fg:FormGroup = this.fb.group({
//       employecode:[user.employecode, Validators.required],
//       amount:[user.amount,Validators.required],
//       calculatedamount:[{value:user.calculatedAmount, diabled:true}],
//       status:[user.status],
//       data:[user.date]
//     });
//     this.forms.push(fg);

//   });
// };

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isDisabled = true;

  dropvalues = [10, 20, 30, 40];

  basicForm = new FormGroup({
    dropdownval: new FormControl(30000),
    salary: new FormControl(),
    nps_percent: new FormControl(10, [
      Validators.required,

      Validators.pattern('^[0-9]*$'),

      Validators.min(0),
      Validators.max(100),
    ]),
    finalValue: new FormControl({
      value: 0,
      disabled: true,
    }),
    pranNumber: new FormControl({ value: '', disabled: true }),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    //console.warn(this.basicForm.value);
    // console.log(this.basicForm.controls['firstName'].value);
    // console.log(this.basicForm.controls['nps_percent')?.value);
  }

  onCheck() {
    // const percent_dropdown = this.basicForm.get('nps_percent')?.value;

    let salary;
    const percent = this.basicForm.get('nps_percent')?.value;
    if (!this.checkopt()) {
      salary = 300000;
    } else {
      salary = this.basicForm.get('salary')?.value;
    }
    console.log(percent);

    let nps = (salary * percent) / 100;
    // this.basicForm.setControl('finalValue',nps);
    nps = Math.floor(nps);
    this.basicForm.controls['finalValue'].setValue(nps);
    console.log(nps);
  }
  checkopt() {
    return this.basicForm.get('dropdownval')?.value == 'User-input';
  }
}

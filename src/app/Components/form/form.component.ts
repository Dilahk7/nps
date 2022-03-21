import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NPSServiceService } from 'src/app/Services/nps-service.service';
import { npsmodel, SetVals } from './model-helper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isDisabled = true;
  nps = 0;

  dropvalues: number[] = [];

  // dropvalues = [10, 20, 30, 40];

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

  constructor(private npsservice: NPSServiceService) {
    this.basicForm.controls['pranNumber'].setValue(this.genrandom());
  }

  ngOnInit(): void {
    this.npsservice.dropvalues().subscribe((response) => {
      this.dropvalues = response;
    });
    console.log(this.dropvalues);
  }

  onSubmit() {
    let var2: SetVals = {
      pran: this.basicForm.get('pranNumber')?.value,
      finval: this.basicForm.get('finalValue')?.value,
    };
    this.npsservice.submitamount(var2);
  }

  async onCheck() {
    // const percent_dropdown = this.basicForm.get('nps_percent')?.value;

    let salary;
    const percent = this.basicForm.get('nps_percent')?.value;
    if (!this.checkopt()) {
      salary = 300000;
    } else {
      salary = this.basicForm.get('salary')?.value;
    }
    console.log(percent);

    //backend response
    let var1: npsmodel = { salary: salary, percent: percent };
    let response = await this.npsservice.calculate(var1);
    if (response != undefined) {
      this.nps = response;
    }

    // this.basicForm.setControl('finalValue',nps);
    this.nps = Math.floor(this.nps);
    this.basicForm.controls['finalValue'].setValue(this.nps);

    console.log(this.nps);
  }
  checkopt() {
    return this.basicForm.get('dropdownval')?.value == 'User-input';
  }

  genrandom() {
    return Math.floor(1000 + Math.random() * 9000);
  }
}

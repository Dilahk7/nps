import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DropdownServiceService } from 'src/app/Services/dropdown-service.service';

@Component({
  selector: 'app-drop-select',
  templateUrl: './drop-select.component.html',
  styleUrls: ['./drop-select.component.css'],
})
export class DropSelectComponent {
  multivalues = ['Approved', 'Rejected', 'Pending'];
  SingleselectedOption!: string;

  @Output() parentFunction: EventEmitter<string> = new EventEmitter();
  SendSingle!: string;

  onSingleSelect(val: any) {
    this.SingleselectedOption = val;

    //for reset
    if (this.SingleselectedOption === 'Select one') {
      this.SingleselectedOption = '';
    }

    this.SendSingle = this.SingleselectedOption;

    //sending to parent
    this.parentFunction.emit(this.SendSingle);
    return this.SingleselectedOption;
    // this.dropservice.setSingleSelect(this.SingleselectedOption);
  }

  constructor(private dropservice: DropdownServiceService) {}
}

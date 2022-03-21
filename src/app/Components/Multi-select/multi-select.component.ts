import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent implements OnInit {
  dropdownList: string[] = [];
  selectedItems: string[] = [];
  dropdownSettings: IDropdownSettings = {};
  selectedOption!: string;

  @Output() Multiparentfunction: EventEmitter<string[]> = new EventEmitter();
  Multisend!: string;

  constructor() {}

  // onEmployeeSelected(val: any) {
  //   this.selectedOption = val;

  //   this.Multisend = this.selectedOption;
  //   this.Multiparentfunction.emit(this.Multisend);
  //   return this.selectedOption;
  // }

  ngOnInit(): void {
    this.dropdownList = ['L1', 'L2', 'L3', 'V1', 'V2', 'V3'];
    this.dropdownSettings = {
      singleSelection: false,
      // textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    this.Multiparentfunction.emit(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tableType } from 'src/app/itr/itr.component';

import { helper } from './helper';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css'],
})
export class DateFilterComponent implements OnInit {
  currentdate!: Date;
  selectedValue!: string;
  beginDate!: Date;
  endDate!: Date;
  dateRange!: helper;

  @Output() toFilter: EventEmitter<string> = new EventEmitter();

  @Output() statusChanged: EventEmitter<tableType[]> = new EventEmitter();

  @Output() dateChanged: EventEmitter<Date> = new EventEmitter();

  @Output() dateRangeChanged: EventEmitter<helper> = new EventEmitter();

  value!: string;
  dropdownList: tableType[] = [];
  selectedItems: tableType[] = [];

  constructor() {}

  ngOnInit() {}

  onChangeSelection() {
    this.toFilter.emit(this.selectedValue);
  }

  onDateChanged() {
    this.dateChanged.emit(this.currentdate);
  }

  onDateRangeChanged() {
    this.dateRange = { startDate: this.beginDate, endDate: this.endDate };
    // this.dateRange.startDate=this.beginDate;
    // this.dateRange.endDate=this.endDate;
    this.dateRangeChanged.emit(this.dateRange);
    console.log('event fired');
  }
}

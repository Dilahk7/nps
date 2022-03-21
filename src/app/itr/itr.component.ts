import { Component, OnInit } from '@angular/core';
import { helper } from '../Components/date-filter/helper';
import { DropdownServiceService } from '../Services/dropdown-service.service';

@Component({
  selector: 'app-itr',
  templateUrl: './itr.component.html',
  styleUrls: ['./itr.component.css'],
})
export class ITRComponent implements OnInit {
  rowNames: string[] = ['Taskcode', 'EmployeeInfo', 'Stage', 'Status', 'Date'];
  dataSource: tableType[] = tableEntries;
  p: number = 1;
  date!: Date;
  dateRange!: helper;

  searchTerm: string = '';
  dropselect: string = '';
  mulitselect: string[] = [];

  parentfunction(val: any) {
    this.dropselect = val;
  }
  Multiparentfunction(val: any) {
    this.mulitselect = val;
  }
  // searchTerm = this.dropservice.getSingleSelect();
  constructor(private dropservice: DropdownServiceService) {}

  ngOnInit(): void {}
}

export interface tableType {
  Taskcode: string;
  EmployeeInfo: string;
  Stage: string;
  Status: string;
  Date: string;
}

const tableEntries: tableType[] = [
  {
    Taskcode: 'aerd',
    EmployeeInfo: 'Sam ',
    Stage: 'L1',
    Status: 'Approved',
    Date: '01-01-2021',
  },
  {
    Taskcode: 'werq',
    EmployeeInfo: 'jane',
    Stage: 'V2',
    Status: 'Pending',
    Date: '03-01-2021',
  },
  {
    Taskcode: 'asdf',
    EmployeeInfo: 'Tan',
    Stage: 'V1',
    Status: 'Rejected',
    Date: '15-02-2021',
  },
  {
    Taskcode: 'addsf',
    EmployeeInfo: 'Van',
    Stage: 'L3',
    Status: 'Approved',
    Date: '02-05-2021',
  },
  {
    Taskcode: 'cvbn',
    EmployeeInfo: 'Dan',
    Stage: 'V2',
    Status: 'Pending',
    Date: '03-03-2021',
  },
  {
    Taskcode: 'aerd',
    EmployeeInfo: 'beta ',
    Stage: 'V3',
    Status: 'Rejected',
    Date: '08-07-2021',
  },
  {
    Taskcode: 'aerd',
    EmployeeInfo: 'theta ',
    Stage: 'V1',
    Status: 'Approved',
    Date: '03-11-2021',
  },
  {
    Taskcode: 'aerd',
    EmployeeInfo: 'cos ',
    Stage: 'L3',
    Status: 'Pending',
    Date: '20-01-2021',
  },
  {
    Taskcode: 'byid',
    EmployeeInfo: 'sin ',
    Stage: 'L2',
    Status: 'Approved',
    Date: '30-01-2021',
  },
  {
    Taskcode: 'xone',
    EmployeeInfo: 'tam ',
    Stage: 'L1',
    Status: 'Pending',
    Date: '22-01-2021',
  },
];

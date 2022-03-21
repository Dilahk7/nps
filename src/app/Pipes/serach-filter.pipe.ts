import { Pipe, PipeTransform } from '@angular/core';
import { tableType } from '../itr/itr.component';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(rowNames: tableType[], searchTerm: string): tableType[] {
    console.log(rowNames);
    if (!rowNames || !searchTerm) {
      return rowNames;
    }
    return rowNames.filter(
      (rowName) =>
        rowName.EmployeeInfo.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
          -1 ||
        rowName.Taskcode.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}

import { stagger } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { tableType } from '../itr/itr.component';
@Pipe({
  name: 'multiselectPipe',
})
export class MultiselectPipePipe implements PipeTransform {
  transform(rowNames: tableType[], searchTerm: string[]) {
    console.log(rowNames);
    if (rowNames.length === 0 || searchTerm.length === 0) {
      return rowNames;
    }
    return rowNames.filter((rowname) => {
      const items = rowname.Stage;
      if (searchTerm.some((it) => it == items)) return true;
      else return false;
    });
  }
}

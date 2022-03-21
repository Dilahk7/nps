import { Pipe, PipeTransform } from '@angular/core';
import { tableType } from '../itr/itr.component';
@Pipe({
  name: 'dropselectPipe',
})
export class DropselectPipePipe implements PipeTransform {
  transform(rowNames: tableType[], searchTerm: string): tableType[] {
    console.log(rowNames);
    if (!rowNames || !searchTerm) {
      return rowNames;
    }
    return rowNames.filter(
      (rowName) =>
        rowName.Status.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}

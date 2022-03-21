import { Pipe, PipeTransform } from '@angular/core';
import { tableType } from '../itr/itr.component';
@Pipe({ name: 'dateFilter' })
export class DateFilterPipe implements PipeTransform {
  transform(tasks: tableType[], date: Date) {
    // console.log(date,date.getDate,date.getFullYear);
    if (!tasks || !date) {
      return tasks;
    }
    // console.log(date,date.getDate,date.getFullYear);
    //console.log(date)
    return tasks.filter((task) => {
      //console.log(task.date);

      const cur = new Date(task.Date);

      if (
        cur.getMonth() == date.getMonth() &&
        cur.getFullYear() == date.getFullYear() &&
        cur.getDate() == date.getDate()
      ) {
        return true;
      }
      // if(cur===date)
      // return true;
      return false;
    });
  }
}

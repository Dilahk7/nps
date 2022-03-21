import { Pipe, PipeTransform } from '@angular/core';
import { helper } from '../Components/date-filter/helper';
import { tableType } from '../itr/itr.component';

@Pipe({ name: 'dateRangeFilter' })
export class DateRangeFilterPipe implements PipeTransform {
  transform(tasks: tableType[], dateRange: helper) {
    if (!tasks || !dateRange) return tasks;

    if (!dateRange.startDate || !dateRange.endDate) return tasks;

    return tasks.filter((task) => {
      const cur = new Date(task.Date);
      // if( (cur.getFullYear()>=dateRange.startDate.getFullYear()) && (cur.getMonth()>=dateRange.startDate.getMonth()) &&
      //     cur.getDate()>=
      // )

      if (cur >= dateRange.startDate && cur <= dateRange.endDate) return true;

      return false;
    });
  }
}
